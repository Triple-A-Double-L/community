<script setup lang="ts">
import { MainFooter, MainNavbar } from '~/components/layout';

const setFavicon = () => {
  const isDark = usePreferredDark();
  const favicon = computed(() =>
    isDark.value ? "/community/img/favicon-dark.ico" : "/community/img/favicon-light.ico"
  );

  useFavicon(favicon, {
    rel: "icon",
  });
};

onMounted(() => {
  setFavicon();
});
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
