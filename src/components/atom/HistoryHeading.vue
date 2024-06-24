<template>
  <h2 class="text-[#777] dark:text-gray-300">
    {{ transactionName }}
  </h2>
</template>

<script setup>
import { defineProps } from "vue";

const { transactionName } = defineProps({
  transactionName: {
    type: String,
    required: true,
  },
});
</script>
