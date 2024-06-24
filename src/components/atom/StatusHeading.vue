<template>
  <h2 class="font-bold capitalize text-[#777] dark:text-gray-300">
    {{ label }}
  </h2>
</template>

<script setup>
import { defineProps } from "vue";

const { label } = defineProps({
  label: {
    type: String,
    required: true,
    default: "",
  },
});
</script>
