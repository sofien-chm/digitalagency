<template>
   <section class="what-we-offer" id="services">
    <div class="container">
    <span class="badge bg-primary px-3 py-2 mb-2">{{ $t('services.badge') }}</span>
      <h2 class="section-title mb-5">
           {{ $t('services.heading_part1') }} <span class="text-primary">{{ $t('services.heading_part2') }}</span> 
      </h2>
      <!-- <div class="cards-container ">
        <div class="card col-lg-4 col-md-12" v-for="(service, index) in services" :key="index">
          <div class="card-body">
          <div class="icon-badge mb-3">
            <i :class="service.icon"></i>
          </div>
          
          <h3 class="card-title">{{ service.title }}</h3>
          <ul class="card-list">
            <li v-for="(item, idx) in service.points" :key="idx" class="card-list-item">
              → {{ item }}
            </li>
          </ul>
          <a href="#" class="read-more">Read More →</a>
          </div>
          
        </div>
      </div> -->
      <div class="row g-4">
        <div class="col-md-4"  v-for="(service, index) in services" :key="index">
          <div class="card ">
          <div class="card-body">
          <div class="icon-badge mb-3">
            <i :class="service.icon"></i>
          </div>
          
          <h3 class="card-title">{{ $t(service.title) }}</h3>
          <ul class="card-list">
            <li v-for="(item, idx) in service.points" :key="idx" class="card-list-item">
              → {{ $t(item) }}
            </li>
          </ul>
          <a href="#" class="read-more">{{ $t('services.readMore') }} →</a>
          </div>
          
        </div>
        </div>
      </div>
    </div>
    
  </section>
  <!-- <section class="services-section py-5" id="services">
    <div class="container">
      <span class="badge bg-primary px-3 py-2 mb-2">SERVICES</span>
      <h2 class="section-title mb-5">
        WHAT WE <span class="text-primary">OFFER</span> 
      </h2>
      <div class="row g-4">
        <div class="col-md-3" v-for="(service, idx) in servicess" :key="idx">
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
              <div class="star-rating mt-auto">
                <i v-for="n in 4" :key="n" class="bi bi-star-fill"></i>
                <i class="bi bi-star-half"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> -->
</template>

<script>
export default {
  
  name: 'WhatWeOffer',
  data() {

    return {

      services: [
        {
          image: new URL('../assets/service1.jpg', import.meta.url).href,
          title: 'services.webDevelopment.title',
          points: [
            'services.webDevelopment.point1',
            'services.webDevelopment.point2',
            'services.webDevelopment.point3'
          ],
          icon: 'bi bi-code-slash',
        },
        {
          title: 'services.websiteDesign.title',
          points: [
            'services.websiteDesign.point1',
            'services.websiteDesign.point2',
            'services.websiteDesign.point3'
          ],
          icon: 'bi bi-pencil-square '
        },
        {
          title: 'services.maintenanceSupport.title',
          points: [
            'services.maintenanceSupport.point1',
            'services.maintenanceSupport.point2',
            'services.maintenanceSupport.point3'
          ],
          icon: 'bi bi-speedometer2 '
        },
      ],
      servicess: [
        {
              title: 'Website Designs',
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
      ],
    }
  },
}

</script>

<style scoped lang="scss">

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
  color: #ffffff;
  font-size: 1.5rem;
  background-color: #062c4c;
  padding: 0.5rem;
  border-radius: 0.75rem;
}
.star-rating i {
  color: #fcc419;
  margin-right: 0.15rem;
  font-size: 1rem;
}
.what-we-offer{
      background: rgba(7, 136, 255, 0.1);
}
</style>
