<script setup>
import { Button } from "../button";

const colorMode = useColorMode();

const handleClick = () => {
  colorMode.preference = colorMode.value == "dark" ? "light" : "dark";
};
</script>

<template>
  <Button variant="ghost" size="icon" @click="handleClick">
    <Icon
      v-if="colorMode.value == 'dark'"
      name="material-symbols:light-mode-rounded"
      class="h-5 w-5"
    />
    <Icon
      v-if="colorMode.value == 'light'"
      name="material-symbols:dark-mode-rounded"
      class="h-5 w-5"
    />
  </Button>
</template>
