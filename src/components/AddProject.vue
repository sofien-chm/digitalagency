<template>
  <div class="project-admin">
    <!-- Add Project Form -->
    <form @submit.prevent="addProject" class="project-form">
      <!-- <label>
        Image:
        <input type="file" accept="image/*" @change="onFileChange" required />
      </label> -->
      <label>
        Title:
        <input type="text" v-model="newProject.title" required />
      </label>
      <label>
        Tags:
        <input type="text" v-model="newProject.tags" placeholder="e.g. Web Design, App Design" required />
      </label>
      <button type="submit" :disabled="loading">{{ loading ? 'Saving...' : 'Add Project' }}</button>
    </form>

    <!-- Display Projects -->
    <div class="projects-list">
      <div class="project-card" v-for="project in projects" :key="project.id">
        <!-- <img :src="project.imageURL" alt="Project Image" /> -->
        <div class="project-info">
          <h3>{{ project.title }}</h3>
          <p>{{ project.tags }}</p>
        </div>
        <button class="arrow-btn">→</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { getFirestore, collection, addDoc, getDocs, serverTimestamp } from "firebase/firestore";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { getApp } from "firebase/app";

export default {
  name: "ProjectAdmin",
  setup() {
    const db = getFirestore(getApp());
    const storage = getStorage(getApp());
    const projects = ref([]);
    const newProject = ref({
      title: "",
      tags: "",
    //   imageFile: null
    });
    const loading = ref(false);

    const fetchProjects = async () => {
      const snap = await getDocs(collection(db, "projects"));
      projects.value = snap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    };

    // const onFileChange = (e) => {
    //   newProject.value.imageFile = e.target.files[0];
    // };

    const addProject = async () => {
    //   if (!newProject.value.imageFile) return;
      loading.value = true;

      // Upload image to Firebase Storage
    //   const imgRef = storageRef(storage, `projects/${Date.now()}_${newProject.value.imageFile.name}`);
    //   await uploadBytes(imgRef, newProject.value.imageFile);
    //   const imageURL = await getDownloadURL(imgRef);

      // Save project to Firestore
      await addDoc(collection(db, "projects"), {
        title: newProject.value.title,
        tags: newProject.value.tags,
        // imageURL,
        createdAt: serverTimestamp()
      });

      // Refresh project list
      await fetchProjects();
      // Reset form
      newProject.value = { title: "", tags: "" };
      loading.value = false;
    };

    onMounted(fetchProjects);

    return {
      newProject,
      projects,
      addProject,
    //   onFileChange,
      loading
    };
  }
};
</script>

<style scoped>
.project-admin {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;
}
.project-form {
  background: #fff;
  padding: 1.2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: flex-end;
}
.project-form label {
  display: flex;
  flex-direction: column;
  font-weight: 600;
}
.project-form input[type="text"] {
  padding: 0.4rem 0.6rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.projects-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: start;
}
.project-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  width: 270px;
  padding: 1rem 1rem 2.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  position: relative;
  transition: box-shadow 0.2s;
}
.project-card:hover {
  box-shadow: 0 6px 18px rgb(0 0 0 / 15%);
}
.project-card img {
  width: 100%;
  border-radius: 7px;
  margin-bottom: 1rem;
  min-height: 120px;
  object-fit: cover;
}
.project-info {
  margin-bottom: auto;
}
.project-info h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a237e;
  margin-bottom: 0.25rem;
}
.project-info p {
  font-size: 1rem;
  color: #7b8ab2;
}
.arrow-btn {
  position: absolute;
  right: 1.5rem;
  bottom: 1rem;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: #2196f3;
  color: #fff;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;
}
.arrow-btn:hover {
  background: #1976d2;
}
</style>
