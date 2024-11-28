<script setup lang="ts">
import type { Member } from "~/types";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import { Button } from "../button";
import CommonIcon from "../common/CommonIcon.vue";

interface Props {
  data: Member;
}

const { data: member } = defineProps<Props>();
</script>

<template>
  <div class="flex gap-6 items-center p-4">
    <Avatar class="h-32 w-32">
      <AvatarImage :src="member.image?.src || ''" :alt="member.image?.alt" />
      <AvatarFallback>
        {{
          member.name
            .split(" ")
            .map((word) => word[0])
            .join("")
            .slice(0, 2)
        }}
      </AvatarFallback>
    </Avatar>
    <div>
      <h3 class="text-lg font-semibold">{{ member.name }}</h3>
      <p class="text-sm text-gray-500 mt-2">{{ member.description }}</p>
      <div v-if="member.links && member.links.length > 0" class="flex gap-2 mt-4">
        <Button v-for="link in member.links" :key="link" variant="ghost" size="icon" as-child>
          <NuxtLink :to="link" target="_blank">
            <CommonIcon :name="link" />
          </NuxtLink>
        </Button>
      </div>
    </div>
  </div>
</template>
