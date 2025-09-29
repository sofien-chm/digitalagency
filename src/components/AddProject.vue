<template>
  <div class="project-admin">
    <!-- Add Project Form -->
    <form @submit.prevent="addProject" class="project-form row" enctype="multipart/form-data">
      <div class="mb-3 form-group col-md-6">
        <label class="form-label">Image:</label>
        <input type="file" accept="image/*" @change="onFileChange" required class="form-control" />
      </div>
      
      <div class="mb-3 form-group col-md-6">
        <label class="form-label">Title:</label>
        <input type="text" v-model="newProject.title" required class="form-control" />
      </div>
      
      <div class="mb-3 form-group col-md-12">
        <label class="form-label">Description:</label>
        <textarea v-model="newProject.description" required class="form-control" rows="3"></textarea>
      </div>
      
        <div class="mb-3 form-group col-md-6">
          <label class="form-label">Type:</label>
          <input type="text" v-model="newProject.type" placeholder="e.g. Website, App, Platform" required class="form-control" />
        </div>
        
        <div class="mb-3 form-group col-md-6">
          <label class="form-label">Languages:</label>
          <input type="text" v-model="newProject.languages" placeholder="e.g. JavaScript, PHP" required class="form-control" />
        </div>
        
        <div class="mb-3 form-group col-md-6">
          <label class="form-label">Platform:</label>
          <input type="text" v-model="newProject.platform" placeholder="e.g. Web, iOS, Android" required class="form-control" />
        </div>
      
        <div class="mb-3 form-group col-md-6">
          <label class="form-label">Country:</label>
          <input type="text" v-model="newProject.country" required class="form-control" />
        </div>
        
        <div class="mb-3 form-group col-md-6">
          <label class="form-label">Live URL:</label>
          <input type="url" v-model="newProject.liveUrl" placeholder="https://example.com" class="form-control" />
        </div>
        
        <div class="mb-3 form-group col-md-6">
          <label class="form-label">Tags:</label>
          <input type="text" v-model="newProject.tags" placeholder="e.g. Web Design, App Design" required class="form-control" />
        </div>
      
      <button type="submit" :disabled="loading" class="btn btn-primary mt-4">
        {{ loading ? 'Saving...' : 'Add Project' }}
      </button>
    </form>

    <!-- Display Projects -->
    <div class="projects-list row row-cols-1 row-cols-md-3 g-4 mt-4">
      <div class="project-card col" v-for="project in projet" :key="project.id">
        <div class="card h-100">
          <img v-if="project.imageURL" :src="project.imageURL" alt="Project Image" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <p><strong>Type:</strong> {{ project.type }}</p>
            <p><strong>Languages:</strong> {{ project.languages }}</p>
            <p><strong>Platform:</strong> {{ project.platform }}</p>
            <p><strong>Country:</strong> {{ project.country }}</p>
            <p><strong>Tags:</strong> {{ project.tags }}</p>
            <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" class="card-link">Live URL</a>
          </div>
          <div class="card-footer d-flex justify-content-end">
            <button class="btn btn-primary rounded-circle">
              →
            </button>
          </div>
        </div>
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
    const projet = ref([]);
    const newProject = ref({
      title: "",
      description: "",
      type: "",
      languages: "",
      platform: "",
      country: "",
      liveUrl: "",
      tags: "",
      imageFile: null,
    });
    const loading = ref(false);

    const fetchProjects = async () => {
      const snap = await getDocs(collection(db, "projet"));
      projet.value = snap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    };

    const onFileChange = (e) => {
      newProject.value.imageFile = e.target.files[0];
    };

    const addProject = async () => {
      if (!newProject.value.imageFile) return;
      loading.value = true;

      // Upload image to Firebase Storage
      const imgRef = storageRef(storage, `projet/${Date.now()}_${newProject.value.imageFile.name}`);
      await uploadBytes(imgRef, newProject.value.imageFile);
      const imageURL = await getDownloadURL(imgRef);

      // Save project to Firestore
      await addDoc(collection(db, "projet"), {
        title: newProject.value.title,
        description: newProject.value.description,
        type: newProject.value.type,
        languages: newProject.value.languages,
        platform: newProject.value.platform,
        country: newProject.value.country,
        liveUrl: newProject.value.liveUrl,
        tags: newProject.value.tags,
        imageURL,
        createdAt: serverTimestamp()
      });

      // Refresh project list
      await fetchProjects();
      // Reset form
      newProject.value = {
        title: "",
        description: "",
        type: "",
        languages: "",
        platform: "",
        country: "",
        liveUrl: "",
        tags: "",
        imageFile: null,
      };
      loading.value = false;
    };

    onMounted(fetchProjects);

    return {
      newProject,
      projet,
      addProject,
      onFileChange,
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
