<script setup lang="ts">
import type { BlogPost } from "~/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../card";
import { Badge } from "../badge";

interface Props {
  data: BlogPost;
}

const { data: post } = defineProps<Props>();
</script>

<template>
  <NuxtLink :to="post._path">
    <Card class="bg-transparent group flex lg:flex-col">
      <CardHeader>
        <div
          class="ring-1 ring-gray-200 dark:ring-gray-800 overflow-hidden aspect-[16/9] rounded-lg"
        >
          <NuxtImg
            :src="post.image?.src"
            :alt="post.image?.alt"
            class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent>
        <div class="mb-3">
          <Badge>{{ post.badge.label }}</Badge>
        </div>
        <CardTitle
          class="text-gray-900 dark:text-white text-xl font-semibold truncate group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200"
          >{{ post.title }}</CardTitle
        >
        <CardDescription
          class="text-base text-gray-500 dark:text-gray-400 mt-1 line-clamp-2"
          >{{ post.description }}</CardDescription
        >
        <p class="text-sm text-gray-500 dark:text-gray-400 font-medium">
          {{
            new Date(post?.date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })
          }}
        </p>
      </CardContent>
    </Card>
  </NuxtLink>
</template>
