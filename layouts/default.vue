<script setup lang="ts">
import { MainFooter, MainNavbar } from '~/components/layout';
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
