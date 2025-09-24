<template>
  <section class="banner-section py-5 container">
    <div class="row align-items-center">
<div class="col-lg-6">
      <h1 class="fw-bold display-6 text-white mb-2">HEY! WE'RE WEB DEVELOPERS</h1>
      <h2 class="fw-bold display-5" style="color:#2196f3; font-size:26px;">BUILDING DIGITAL SOLUTIONS</h2>
      <p class="text-light mt-4 fs-5" style="max-width: 500px;">
        With a combined experience of 14 years in web development,<br>
        we specialize in crafting modern, effective websites and web applications.<br>
        From WordPress to Vue.js, Angular, .NET, Drupal, and PrestaShop,
         deliver results that help freelancers and businesses grow.<br>
         Let us turn your ideas into reality with creative and reliable web solutions.
      </p>
    </div>
    <div class="col-lg-6 banner-pic position-relative">
       <img src="../assets/logo.png" alt="Profile" class="rounded-circle img-fluid banner-image" />
      <!-- Decorative circles and lines can be overlayed here with CSS or extra divs -->
    </div>
    </div>
    
  </section>
</template>

<script setup>
// No additional logic needed for static banner
</script>

<style lang="scss">
.banner-section {
  min-height: 75vh;
  // background: linear-gradient(90deg,#07233B 1.67%,#041D34 39.95%,#04192D 58.24%,#040E18 80.28%,#050C16 101.48%);
}
.banner-pic {
  min-width: 320px;
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.banner-image {
  width: 320px;
  height: 320px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 0 100px 10px rgba(0,0,0,0.5);
}
</style>
