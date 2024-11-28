<script setup lang="ts">
import { PageSection } from "~/components/layout";
import AspectRatio from "~/components/ui/aspect-ratio/AspectRatio.vue";
</script>

<template>
  <div>
    <PageSection class="py-24 sm:py-32 md:py-40 text-center">
      <h1
        class="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl"
      >
        Segnala, proponi e trasforma con un click.
      </h1>
      <p class="mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300">
        L'applicazione che semplifica
      </p>
      <div class="mt-10 flex flex-wrap gap-x-6 gap-y-3 justify-center">
        <Button as-child size="lg">
          <NuxtLink to="/">test</NuxtLink>
        </Button>
      </div>
    </PageSection>
    <PageSection>
      <AspectRatio :ratio="16/9" class="bg-gray-900/5 dark:bg-white/5 ring-1 ring-inset ring-gray-900/10 dark:ring-white/10 rounded-xl lg:-m-4 p-4">
        <iframe
          src="https://embed.figma.com/proto/nrPSsILSYjesyc5UHjYYa4?node-id=5-3&starting-point-node-id=5%3A3&embed-host=figma-embed-docs"
          allowfullscreen
          class="w-full h-full"
        />
      </AspectRatio>
    </PageSection>
  </div>
</template>
