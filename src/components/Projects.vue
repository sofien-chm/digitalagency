<template>
  <section class="projects-section py-5" id="projects">
    <div class="container">
      <span class="badge rounded-pill bg-primary fs-6 px-3 py-2 mb-3">MY WORK</span>
      <h2 class="fw-bold display-5 text-white mb-4">RECENT PROJECT</h2>
      <div class="row g-4">
        <div class="col-md-3" v-for="(project, idx) in projects" :key="idx">
          <div class="card h-100 project-card">
            <img :src="project.image" class="card-img-top" :alt="project.title" />
            <div class="card-body">
              <h5 class="card-title fw-bold">{{ project.title }}</h5>
              <p class="card-text text-secondary">{{ project.subtitle }}</p>
              <button class="btn btn-primary rounded-circle float-end">
                <i class="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    image: new URL('../assets/project1.jpg', import.meta.url).href,
    title: 'Website Design',
    subtitle: 'Web Design, App Design',
  },
  {
    image: new URL('../assets/project2.jpg', import.meta.url).href,
    title: 'Website Design',
    subtitle: 'Web Design, App Design',
  },
  {
    image: new URL('../assets/project3.jpg', import.meta.url).href,
    title: 'Website Design',
    subtitle: 'Web Design, App Design',
  },
  {
    image: new URL('../assets/project4.jpg', import.meta.url).href,
    title: 'Website Design',
    subtitle: 'Web Design, App Design',
  }
];

</script>

<style lang="scss">
.projects-section {
  // background: linear-gradient(90deg, #071836 60%, #133364 100%);
  min-height: 70vh;
}
.project-card {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 14px 0 rgba(20, 48, 96, 0.12);
  background: #fff;
  .card-title {
    color: #0c1745;
  }
  .btn {
    background: #2196f3;
    border: none;
    width: 40px;
    height: 40px;
    i {
      color: #fff;
      font-size: 1.2rem;
    }
  }
}
</style>
