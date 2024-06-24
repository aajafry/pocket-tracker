<template>
  <h2
    class="text-xl uppercase border-b-2 border-[#bbb] dark:border-slate-600 pb-2 mb-2"
  >
    {{ label }}
  </h2>
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
