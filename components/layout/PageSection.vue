<script setup lang="ts">
import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'vue';

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <div :class="cn('mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl', props.class)">
    <slot />
  </div>
</template>
