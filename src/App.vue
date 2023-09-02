<template>
  <NavBar />

  <div class="container is-max-desktop px-2 py-4">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/layout/NavBar.vue';
</script>
