<template>
  <nav class="menu container">
    <div class="logo">AS</div>
    <ul>
      <router-link to="/">HOME</router-link>
      <li><a href="#about">ABOUT ME</a></li>
      <li><a href="#services">SERVICES</a></li>
      <li><a href="#projects">PROJECTS</a></li>
      <li><a href="#contact">CONTACT</a></li>
    </ul>
    <a href="#letstalk" class="lets-talk-btn">LET'S TALK</a>
    <router-link to="/signup">Sign Up</router-link>

  </nav>
</template>

<style lang="scss" scoped>
.menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0rem;
  // background: linear-gradient(90deg, #001a40 60%, #1e3a8a 100%);
  color: white;
}
.logo {
  font-weight: bold;
  font-size: 2rem;
}
ul {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}
li a, .lets-talk-btn {
  color: white;
  text-decoration: none;
  font-weight: 600;
}
.lets-talk-btn {
  background-color: #2196f3;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  white-space: nowrap;
}
</style>
