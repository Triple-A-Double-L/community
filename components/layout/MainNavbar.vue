<script setup lang="ts">
import { GITHUB_REPO_LINK } from "~/data/const";
import { Button } from "../ui/button";
import ThemeSelector from "../ui/common/ThemeSelector.vue";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { WebsiteLogo } from "../ui/common";

const colorMode = useColorMode();
</script>

<template>
  <header
    class="bg-white/75 dark:bg-gray-900/75 backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50"
  >
    <div
      class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-3"
    >
      <NuxtLink
        class="font-bold text-xl flex items-center gap-4 uppercase"
        to="/"
      >
        <WebsiteLogo class="w-12 h-12 dark:fill-white fill-black" />
        Community
      </NuxtLink>
      <div class="hidden lg:flex items-center gap-4">
        <NuxtLink to="/" active-class="font-bold">Home</NuxtLink>
        <NuxtLink to="/about" active-class="font-bold">About</NuxtLink>
        <NuxtLink to="/posts" active-class="font-bold">Posts</NuxtLink>
        <ThemeSelector />
        <Button as-child>
          <NuxtLink :to="GITHUB_REPO_LINK" target="_blank" rel="noopener">
            <Icon
              name="mdi:github"
              class="h-6 w-6 fill-gray-200 dark:fill-gray-800"
            />
            Github
          </NuxtLink>
        </Button>
      </div>
      <div class="block lg:hidden">
        <ThemeSelector />
        <Sheet>
          <SheetTrigger as-child>
            <Button size="icon" variant="ghost">
              <Icon
                name="mdi:menu"
                class="h-6 w-6 fill-gray-200 dark:fill-gray-800"
              />
            </Button>
          </SheetTrigger>
          <SheetContent
            class="w-full !max-w-none flex flex-col justify-between"
          >
            <SheetHeader>
              <SheetClose as-child>
                <NuxtLink class="text-lg" to="/">Home</NuxtLink>
              </SheetClose>
              <SheetClose as-child>
                <NuxtLink class="text-lg" to="/about">About</NuxtLink>
              </SheetClose>
              <SheetClose as-child>
                <NuxtLink class="text-lg" to="/posts">Posts</NuxtLink>
              </SheetClose>
            </SheetHeader>
            <SheetFooter>
              <Button class="w-full" as-child>
                <NuxtLink :to="GITHUB_REPO_LINK" target="_blank" rel="noopener">
                  <Icon
                    name="mdi:github"
                    class="h-6 w-6 fill-gray-200 dark:fill-gray-800"
                  />
                  Github
                </NuxtLink>
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </header>
</template>
