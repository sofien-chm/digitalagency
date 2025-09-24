<template>
  <HeaderMenu />
  <router-view />
</template>

<script setup>
import HeaderMenu from './components/HeaderMenu.vue';
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(
    90deg,
    #07233b 1.67%,
    #041d34 39.95%,
    #04192d 58.24%,
    #040e18 80.28%,
    #050c16 101.48%
  );
  color: #fff;
  scroll-behavior: smooth; /* enable smooth scroll globally */
}
</style>
