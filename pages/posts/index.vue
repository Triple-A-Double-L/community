<script setup lang="ts">
import { PageSection } from "~/components/layout";
import { PostCard } from "~/components/ui/posts";
import type { BlogPost } from "~/types";

const { data: posts } = await useAsyncData("/posts", () =>
  queryContent<BlogPost>("/posts").find()
);
</script>

<template>
  <PageSection>
    <div
      class="relative border-b border-gray-200 dark:border-gray-800 py-12 lg:py-16"
    >
      <h1
        class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight"
      >
        Posts
      </h1>
      <p class="mt-4 text-lg text-gray-500 dark:text-gray-400">
        Collezioni di consegne
      </p>
    </div>
    <div
      class="mt-8 pb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
    >
      <PostCard v-for="post in posts" :key="post.slug" :data="post" />
    </div>
  </PageSection>
</template>
