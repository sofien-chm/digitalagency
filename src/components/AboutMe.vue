<template>
  <section class="about-section py-5" id="about">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-5 text-center position-relative">
          <img src="../assets/project1.jpg" alt="About Us" class="about-photo rounded-3 shadow" />
          <div class="about-circle decor-circle"></div>
          <!-- You can duplicate and position more decor circles if needed -->
        </div>
        <div class="col-md-7">
          <span class="badge rounded-pill bg-primary px-3 py-2 mb-3">ABOUT US</span>
          <h2 class="fw-bold text-white mb-3">I AM AVAILABLE FOR <span class="accent-blue">UI UX DESIGN</span> PROJECTS</h2>
          <p class="text-light mb-4">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.<br>
            Sections 1.10.32 and 1.10.33 from “de Finibus Bonorum et Malorum” by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
          </p>
          <div class="row mb-4">
            <div class="col-4">
              <div class="about-feature bg-dark rounded-3 p-3 text-center text-white">
                <div class="fs-4 fw-bold">280+</div>
                <div class="fs-6">Google Reviews</div>
              </div>
            </div>
            <div class="col-4">
              <div class="about-feature bg-dark rounded-3 p-3 text-center text-white">
                <div class="fs-4 fw-bold">15+</div>
                <div class="fs-6">Years Experience</div>
              </div>
            </div>
            <div class="col-4">
              <div class="about-feature bg-dark rounded-3 p-3 text-center text-white">
                <div class="fs-4 fw-bold">49+</div>
                <div class="fs-6">Award Winning</div>
              </div>
            </div>
          </div>
          <a href="#contact" class="btn btn-primary rounded-pill px-4 py-2">GET IN TOUCH</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No logic needed, update your image path and text
</script>

<style lang="scss">
.about-section {
  // background: linear-gradient(90deg, #133364 60%, #071836 100%);
}
.about-photo {
  width: 280px;
  height: 340px;
  object-fit: cover;
  z-index: 1;
}
.about-circle {
  position: absolute;
  left: 25px;
  bottom: -40px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid #36c3f9;
  opacity: 0.4;
}
.accent-blue {
  color: #36c3f9;
}
.about-feature {
  background: #193b63;
  border: none;
}
</style>
