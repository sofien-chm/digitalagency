<template>
  <section class="banner-section py-5 container">
    <div class="row align-items-center">
<div class="col-lg-6">
      <span class="badge rounded-pill bg-primary mb-3 fs-6 px-3 py-2">JENNA ORTEGA</span>
      <h1 class="fw-bold display-3 text-white mb-2">HAY! I'M JENNA</h1>
      <h2 class="fw-bold display-5" style="color:#2196f3;">I'M A DEV|</h2>
      <p class="text-light mt-4 fs-5" style="max-width: 500px;">
        Yet bed any for travelling assistance indulgence unpleasing.<br>
        Not thoughts all exercise blessing.<br>
        Indulgence way everything joy alteration boisterous the attachment.
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
