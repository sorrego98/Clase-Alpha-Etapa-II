<script setup>
import { /*RouterLink,*/ RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <header>
    <Navbar />
  </header>

  <RouterView />

  <footer>
    <FooterComponent />
  </footer>
</template>