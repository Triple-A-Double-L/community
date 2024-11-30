<script setup lang="ts">
import { withoutTrailingSlash } from "ufo";
import { PageSection } from "~/components/layout";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
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
    queryContent("posts")
      .without(["body", "excerpt"])
      .sort({ date: 1 })
      .findSurround(route.path),
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
      <div v-if="post?.links && post.links.length > 0" class="flex mt-6 gap-4">
        <Button v-for="link in post.links" :key="link.url" as-child>
          <NuxtLink :to="link.url" :target="link.target" class="group">
            <Icon :v-if="link.icon" :name="link.icon" class="w-5 h-5" />
            <span>{{ link.label }}</span>
            <Icon
              name="material-symbols:arrow-right"
              class="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
            />
          </NuxtLink>
        </Button>
      </div>
    </div>
    <div
      class="pb-24 flex flex-col-reverse lg:grid lg:grid-cols-3 lg:gap-12 mt-6"
    >
      <div class="col-span-2">
        <ContentRenderer
          :value="post ?? {}"
          class="prose prose-primary dark:prose-invert max-w-none"
        />
        <Separator v-if="surround?.length" class="my-12" />
        <div class="grid gap-8 sm:grid-cols-2">
          <Card
            v-if="surround[0] != null"
            class="bg-transparent dark:border-gray-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 group"
            as-child
          >
            <NuxtLink :to="surround[0]._path">
              <CardContent class="p-6">
                <div
                  class="inline-flex items-center rounded-full p-1.5 bg-gray-100 dark:bg-gray-800 group-hover:bg-primary/10 ring-1 ring-gray-300 dark:ring-gray-700 mb-4 group-hover:ring-primary/50"
                >
                  <Icon
                    name="material-symbols:arrow-back-rounded"
                    class="w-5 h-5"
                  />
                </div>
                <h3 class="font-medium text-gray-900 dark:text-white mb-1">
                  {{ surround[0].title }}
                </h3>
                <p
                  class="text-sm font-normal text-gray-500 dark:text-gray-400 line-clamp-2"
                >
                  {{ surround[0].description }}
                </p>
              </CardContent>
            </NuxtLink>
          </Card>
          <span v-else class="hidden sm:block">&nbsp;</span>

          <Card
            v-if="surround[1] != null"
            class="bg-transparent dark:border-gray-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 group text-right"
            as-child
          >
            <NuxtLink as-child :to="surround[1]._path">
              <CardContent class="p-6">
                <div
                  class="inline-flex items-center rounded-full p-1.5 bg-gray-100 dark:bg-gray-800 group-hover:bg-primary/10 ring-1 ring-gray-300 dark:ring-gray-700 mb-4 group-hover:ring-primary/50"
                >
                  <Icon
                    name="material-symbols:arrow-forward-rounded"
                    class="w-5 h-5"
                  />
                </div>
                <h3 class="font-medium text-gray-900 dark:text-white mb-1">
                  {{ surround[1].title }}
                </h3>
                <p
                  class="text-sm font-normal text-gray-500 dark:text-gray-400 line-clamp-2"
                >
                  {{ surround[1].description }}
                </p>
              </CardContent>
            </NuxtLink>
          </Card>
          <span v-else class="hidden sm:block">&nbsp;</span>
        </div>
      </div>
      <div>
        <div
          class="lg:sticky top-24 px-4 sm:px-6 lg:px-4 lg:-mx-4 overflow-y-auto max-h-[calc(100vh-var(96px))]"
        >
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Table of contents
          </h3>
        </div>
      </div>
    </div>
  </PageSection>
</template>
