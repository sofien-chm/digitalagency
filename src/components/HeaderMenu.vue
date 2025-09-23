<template>
  <nav class="menu">
    <div class="logo">JENNA</div>
    <ul>
      <li><router-link to="/">HOME</router-link></li>
      <li><router-link to="/about">ABOUT ME</router-link></li>
      <li><router-link to="/services">SERVICES</router-link></li>
      <li><router-link to="/projects">PROJECTS</router-link></li>
      <li><router-link to="/contact">CONTACT</router-link></li>
    </ul>
    <router-link to="/letstalk" class="lets-talk-btn">LET'S TALK</router-link>
  </nav>
</template>

<style scoped>
.menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  background: linear-gradient(90deg, #001A40 60%, #1e3a8a 100%);
}
.logo {
  font-weight: bold;
  font-size: 2rem;
  color: #fff;
}
ul {
  list-style: none;
  display: flex;
  gap: 32px;
  margin: 0;
  padding: 0;
}
li a {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
}
.lets-talk-btn {
  background: #2196f3;
  color: #fff;
  padding: 0.7em 2em;
  border-radius: 24px;
  font-weight: bold;
  text-decoration: none;
}
</style>
