<template>
  <div id="app">
    <HeaderMenu />
    <Banner />
    <main>
      <!-- <Home id="home" /> -->
      <AboutMe id="about" />
      <Services id="services" />
      <Projects id="projects" />
      <Contact id="contact" />
      <LetsTalk id="letstalk" />

    </main>
  </div>
</template>

<script setup>
import HeaderMenu from './components/HeaderMenu.vue';
import Banner from './components/Banner.vue';
import Home from './components/Home.vue';
import AboutMe from './components/AboutMe.vue';
import Services from './components/Services.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';
import LetsTalk from './components/LetsTalk.vue';
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
