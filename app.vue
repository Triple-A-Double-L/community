<script setup lang="ts">
const setFavicon = () => {
  const isDark = usePreferredDark();
  const favicon = computed(() =>
    isDark.value ? "/img/favicon-dark.ico" : "/img/favicon-light.ico"
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
  <Body
    class="antialiased duration-300 transition-colors text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900 min-h-screen0"
  >
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </Body>
</template>
