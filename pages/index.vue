<script setup lang="ts">
import { PageSection } from "~/components/layout";
import AspectRatio from "~/components/ui/aspect-ratio/AspectRatio.vue";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { FIGMA_DESIGN_LINK, GITHUB_REPO_LINK } from "~/data/const";
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
        Partecipa attivamente alla vita della tua città con l'applicazione che
        migliora la comunicazione tra cittadini e amministrazioni locali.
      </p>
      <div class="mt-10 flex flex-wrap gap-x-6 gap-y-3 justify-center">
        <Button as-child size="lg">
          <NuxtLink :to="GITHUB_REPO_LINK" target="_blank" rel="noopener">
            <Icon
              name="mdi:github"
              class="h-6 w-6 fill-gray-200 dark:fill-gray-800"
            />
            Github
          </NuxtLink>
        </Button>
        <Button as-child size="lg">
          <NuxtLink :to="FIGMA_DESIGN_LINK" target="_blank" rel="noopener">
            <Icon
              name="ph:figma-logo"
              class="h-6 w-6 fill-gray-200 dark:fill-gray-800"
            />
            Figma
          </NuxtLink>
        </Button>
      </div>
    </PageSection>
    <PageSection class="pb-10">
      <Tabs default-value="mobile" class="w-full">
        <TabsList class="mx-auto w-fit block">
          <TabsTrigger value="mobile">Mobile</TabsTrigger>
          <TabsTrigger value="desktop">Desktop</TabsTrigger>
        </TabsList>
        <AspectRatio
          :ratio="16 / 9"
          class="bg-gray-900/5 dark:bg-white/5 ring-1 ring-inset ring-gray-900/10 dark:ring-white/10 rounded-xl mt-10 p-4"
        >
          <TabsContent value="mobile" class="w-full h-full mt-0">
            <iframe
              src="https://embed.figma.com/proto/z16veuyvXmAGiqdTn3KbFT/Prototype?node-id=0-1&embed-host=share"
              allowfullscreen
              class="w-full h-full"
            />
          </TabsContent>
          <TabsContent value="desktop" class="w-full h-full mt-0">
            <iframe
              src="https://embed.figma.com/proto/z16veuyvXmAGiqdTn3KbFT/Prototype?node-id=29-206&embed-host=share"
              allowfullscreen
              class="w-full h-full"
            />
          </TabsContent>
        </AspectRatio>
      </Tabs>
    </PageSection>
  </div>
</template>
