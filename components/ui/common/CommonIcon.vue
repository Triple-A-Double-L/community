<script setup lang="ts">
interface Props {
  name: string;
}

const { name: data } = defineProps<Props>();

let iconName = "mingcute:earth-line";

const iconMap: { [key: string]: string } = {
  github: "mdi:github",
  linkedin: "mdi:linkedin",
  twitter: "bi:twitter-x",
  facebook: "mdi:facebook",
  instagram: "mdi:instagram",
  youtube: "mdi:youtube",
};

if (data) {
  for (const key in iconMap) {
    if (data.includes(key)) {
      iconName = iconMap[key];
      break;
    }
  }
}
</script>
<template>
  <Icon :name="iconName" class="w-5 h-5" />
</template>
