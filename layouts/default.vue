<script setup lang="ts">
import MainNavbar from "~/components/layout/MainNavbar.vue";
</script>

<template>
  <div>
    <MainNavbar />
    <main>
      <slot />
    </main>
  </div>
</template>
