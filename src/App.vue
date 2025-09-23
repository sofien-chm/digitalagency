<template>
  <div id="app">
    <!-- <HeaderMenu /> -->
    <Home />
    <router-view />
  </div>
</template>

<script setup>
// import HeaderMenu from './components/HeaderMenu.vue';
import Home from './components/Home.vue';

</script>

<style>
body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background: #071836;
  color: #fff;
}
</style>
