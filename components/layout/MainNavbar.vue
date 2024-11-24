<script setup lang="ts">
import { Button } from '../ui/button';
import ThemeSelector from '../ui/common/ThemeSelector.vue';
</script>

<template>
  <header
    class="bg-white/75 dark:bg-gray-900/75 backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50"
  >
    <div
      class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-3"
    >
      <NuxtLink class="font-bold text-xl flex items-center gap-4 uppercase" to="/">
        <NuxtImg src="/logo.svg" height="48" width="48" />
        Community
      </NuxtLink>
      <div class="flex items-center gap-4">
        <NuxtLink>Home</NuxtLink>
        <NuxtLink>About Us</NuxtLink>
        <NuxtLink>Posts</NuxtLink>
        <ThemeSelector />
        <Button as="a" href="https://github.com/mMichele03/triple-a-double-l" target="_blank" rel="noopener"> 
          <Icon name="mdi:github" class="h-6 w-6 fill-gray-200 dark:fill-gray-800" />
          Github
        </Button>
      </div>
    </div>
  </header>
</template>
