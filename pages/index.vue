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
        Segnala, proponi e trasforma con un click
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
    <PageSection class="pb-24 sm:pb-32">
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
    <PageSection class="py-24 sm:py-32 grid lg:grid-cols-2 items-center">
      <div>
        <h2
          class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl"
        >
          Un ponte tra cittadini e amministrazione
        </h2>
        <div class="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
          Con Community, sei tu il protagonista del cambiamento. Partecipa
          attivamente alla vita della tua comunità, informandoti su quanto
          accade, segnalando le criticità e proponendo nuove idee per migliorare
          la tua città.
        </div>
        <dl class="mt-6 leading-7 space-y-4">
          <div class="flex items-center gap-4">
            <Icon
              name="material-symbols:breaking-news"
              class="w-6 h-6 flex-shrink-0"
            />
            <div>
              <dt class="font-semibold text-gray-900 dark:text-white">
                <span>Informati</span>
              </dt>
              <dd class="text-gray-500 dark:text-gray-400 leading-6">
                Resta aggiornato su eventi, notizie e iniziative del tuo comune.
              </dd>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <Icon name="ri:megaphone-fill" class="w-6 h-6 flex-shrink-0" />
            <div>
              <dt class="font-semibold text-gray-900 dark:text-white">
                <span>Segnala</span>
              </dt>
              <dd class="text-gray-500 dark:text-gray-400 leading-6">
                Scopri un problema? Una buca per strada, un lampione spento?
                Segnalalo subito con pochi click e segui l'avanzamento della tua
                richiesta.
              </dd>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <Icon
              name="material-symbols:lightbulb-2"
              class="w-6 h-6 flex-shrink-0"
            />
            <div>
              <dt class="font-semibold text-gray-900 dark:text-white">
                <span>Proponi</span>
              </dt>
              <dd class="text-gray-500 dark:text-gray-400 leading-6">
                Hai un'idea per migliorare la tua città? Condividila con la
                comunità e l'amministrazione. La tua voce conta!
              </dd>
            </div>
          </div>
        </dl>
      </div>
      <NuxtImg class="p-5" src="img/city.png" alt="image of a city" />
    </PageSection>
    <PageSection class="py-24 sm:py-32 grid lg:grid-cols-2 items-center">
      <NuxtImg class="p-5" src="img/comunity.png" alt="image of a city" />
      <div>
        <h2
          class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl"
        >
          I nostri valori al tuo servizio tua città, nelle tue mani
        </h2>
        <div class="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
          In Community, crediamo che una città migliore sia frutto della
          collaborazione tra cittadini e amministrazione. Per questo, abbiamo
          costruito la nostra piattaforma attorno a tre valori fondamentali:
        </div>
        <dl class="mt-6 leading-7 space-y-4">
          <div class="flex items-center gap-4">
            <Icon
              name="material-symbols:settings"
              class="w-6 h-6 flex-shrink-0"
            />
            <div>
              <dt class="font-semibold text-gray-900 dark:text-white">
                <span>Semplicità</span>
              </dt>
              <dd class="text-gray-500 dark:text-gray-400 leading-6">
                Vogliamo che tu possa interagire con la tua città in modo facile
                e intuitivo. Con pochi tap, puoi segnalare un problema, proporre
                una soluzione o restare informato sulle novità.
              </dd>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <Icon
              name="material-symbols:groups"
              class="w-6 h-6 flex-shrink-0"
            />
            <div>
              <dt class="font-semibold text-gray-900 dark:text-white">
                <span>Collaborazione</span>
              </dt>
              <dd class="text-gray-500 dark:text-gray-400 leading-6">
                Crediamo nel potere della comunità. Condividi le tue idee, vota
                le proposte degli altri e contribuisci a creare una città più
                vivibile per tutti.
              </dd>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <Icon name="bi:transparency" class="w-6 h-6 flex-shrink-0" />
            <div>
              <dt class="font-semibold text-gray-900 dark:text-white">
                <span>Trasparenza</span>
              </dt>
              <dd class="text-gray-500 dark:text-gray-400 leading-6">
                Vogliamo garantire la massima trasparenza nei rapporti tra
                cittadini e amministrazione. Segnala un problema e ricevi un
                riscontro chiaro e tempestivo sull'avanzamento della tua
                richiesta.
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </PageSection>
  </div>
</template>
