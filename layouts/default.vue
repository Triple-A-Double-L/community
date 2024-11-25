<script setup lang="ts">
import MainNavbar from "~/components/layout/MainNavbar.vue";
import MainFooter from "~/components/layout/MainFooter.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col justify-between">
    <MainNavbar />
    <main class="flex-1">
      <slot />
    </main>
    <MainFooter />
  </div>
</template>
