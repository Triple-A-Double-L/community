<template>
  <h4
    :id="props.id"
    class="relative before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-100 before:font-normal before:content-['#'] before:absolute before:-left-6 before:text-blue-600 before:dark:text-blue-200"
  >
    <a v-if="props.id && generate" :href="`#${props.id}`" class="no-underline">
      <slot />
    </a>
    <slot v-else />
  </h4>
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig } from "#imports";

const props = defineProps<{ id?: string }>();

const { headings } = useRuntimeConfig().public.mdc;
const generate = computed(
  () =>
    props.id &&
    ((typeof headings?.anchorLinks === "boolean" &&
      headings?.anchorLinks === true) ||
      (typeof headings?.anchorLinks === "object" && headings?.anchorLinks?.h4))
);
</script>
