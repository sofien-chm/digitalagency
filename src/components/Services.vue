<template>
  <section class="services-section py-5" id="services">
    <div class="container">
      <span class="badge bg-primary px-3 py-2 mb-2">SERVICES</span>
      <h2 class="section-title mb-5">
        DESIGN <span class="text-primary">SERVICES</span> I AM PROVIDING
      </h2>
      <div class="row g-4">
        <div class="col-md-3" v-for="(service, idx) in services" :key="idx">
          <div class="card service-card h-100">
            <img :src="service.image" class="card-img-top" :alt="service.title" />
            <div class="card-body">
              <div class="icon-badge mb-3">
                <i :class="service.icon"></i>
              </div>
              <h5 class="card-title">{{ service.title }}</h5>
              <p class="card-text text-white-50">
                {{ service.description }}
              </p>
              <!-- <div class="star-rating mt-auto">
                <i v-for="n in 4" :key="n" class="bi bi-star-fill"></i>
                <i class="bi bi-star-half"></i>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: 'Website Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    image: new URL('../assets/service1.jpg', import.meta.url).href,
    icon: 'bi bi-pencil-square',
  },
  {
    title: 'Website Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    image: new URL('../assets/service1.jpg', import.meta.url).href,
    icon: 'bi bi-code-slash',
  },
  {
    title: 'SEO Marketing',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    image: new URL('../assets/service1.jpg', import.meta.url).href,
    icon: 'bi bi-speedometer2',
  },
  {
    title: 'Graphic Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    image: new URL('../assets/service1.jpg', import.meta.url).href,
    icon: 'bi bi-palette',
  },
];
</script>

<style scoped lang="scss">
.services-section {
  // background: linear-gradient(90deg, #071836 60%, #133364 100%);
  color: white;
}
.section-title {
  font-weight: 700;
  font-size: 2.5rem;
  font-family: 'Poppins', sans-serif;
}
.service-card {
  background: #142240;
  border-radius: 1rem;
  box-shadow: 0 2px 16px #101c39;
  display: flex;
  flex-direction: column;
}
.card-img-top {
  border-radius: 1rem 1rem 0 0;
  max-height: 180px;
  object-fit: cover;
}
.icon-badge {
  display: inline-flex;
  color: #53cefa;
  font-size: 1.5rem;
  background-color: rgba(83, 206, 250, 0.15);
  padding: 0.5rem;
  border-radius: 0.75rem;
}
.star-rating i {
  color: #fcc419;
  margin-right: 0.15rem;
  font-size: 1rem;
}
</style>
