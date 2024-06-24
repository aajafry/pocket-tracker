<template>
  <h2 class="text-2xl font-semibold">{{ label }}</h2>
</template>

<script setup>
import { defineProps } from "vue";

const { label } = defineProps({
  label: {
    type: String,
    required: true,
  },
});
</script>
