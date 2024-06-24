<template>
  <Sun v-if="isDark" @click="toggleTheme" class="cursor-pointer" />
  <Moon v-else @click="toggleTheme" class="cursor-pointer" />
</template>

<script setup>
import { ref } from "vue";
import Moon from "./icons/Moon.vue";
import Sun from "./icons/Sun.vue";

let isDark = ref(true);

const toggleTheme = () => {
  isDark.value = !isDark.value;
  document.body.classList.toggle("dark");
};
</script>