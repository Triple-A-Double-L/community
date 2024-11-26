<script setup lang="ts">
import { withoutTrailingSlash } from "ufo";
import { PageSection } from "~/components/layout";
import { Badge } from "~/components/ui/badge";
import type { BlogPost } from "~/types";

const route = useRoute();

const { data: post } = await useAsyncData(route.path, () =>
  queryContent<BlogPost>(route.path).findOne()
);
if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Post not found",
    fatal: true,
  });
}

const title = post.value.head?.title || post.value.title;
const description = post.value.head?.description || post.value.description;

const date = new Date(post.value.date).toLocaleDateString(undefined, {
  year: "numeric",
  month: "short",
  day: "numeric",
});

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
});

if (post.value.image?.src) {
  defineOgImage({
    url: post.value.image.src,
  });
} else {
  defineOgImageComponent("Saas", {
    headline: "Blog",
  });
}

const { data: surround } = await useAsyncData(
  `${route.path}-surround`,
  () =>
    queryContent("/posts")
      .where({ _extension: "md" })
      .without(["body", "excerpt"])
      .sort({ date: -1 })
      .findSurround(withoutTrailingSlash(route.path)),
  { default: () => [] }
);
</script>

<template>
  <PageSection>
    <div class="relative border-b border-gray-200 dark:border-gray-800 py-8">
      <div
        class="mb-3 text-sm/6 font-semibold text-primary flex items-center gap-1.5"
      >
        <Badge>{{ post?.badge.label }}</Badge>
        <span class="text-gray-500 dark:text-gray-400">·</span>
        <time class="text-gray-500 dark:text-gray-400">{{ date }}</time>
      </div>
      <div>
        <h1
          class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight"
        >
          {{ post?.title }}
        </h1>
      </div>
      <div class="mt-4 text-lg text-gray-500 dark:text-gray-400">
        {{ post?.description }}
      </div>
    </div>
    <div class="mt-8 pb-24 prose prose-primary dark:prose-invert max-w-none">
      <ContentRenderer :value="post ?? {}" />
    </div>
  </PageSection>
</template>
