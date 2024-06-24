<template>
  <span>${{ transactionAmount }}</span>
</template>

<script setup>
import { defineProps } from "vue";

const { transactionAmount } = defineProps({
  transactionAmount: {
    type: Number,
    required: true,
    default: () => 0,
  },
});
</script>
