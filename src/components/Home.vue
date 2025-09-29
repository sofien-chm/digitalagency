<template>
<router-view /> 
  <div id="app">
    <Banner />
    <main>
      <AboutMe id="about" />
      <Services id="services" />
      <Projects id="projects" />
      <Team id="team" />
      <Contact id="contact" />
    </main>
  </div>

</template>

<script setup>
import Banner from './Banner.vue';
import AboutMe from './AboutMe.vue';
import Services from './Services.vue';
import Projects from './Projects.vue';
import Team from './Team.vue';
import Contact from './Contact.vue';
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(90deg,#07233B 1.67%,#041D34 39.95%,#04192D 58.24%,#040E18 80.28%,#050C16 101.48%);
  color: #fff;
  scroll-behavior: smooth; // enable smooth scroll globally
}

</style>
