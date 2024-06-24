<template>
  <p
    :class="{
      'text-green-500': label.toLowerCase() === 'income',
      'text-red-500': label.toLowerCase() === 'expense',
      '': label.toLowerCase() === 'balance',
    }"
  >
    ${{ amount }}
  </p>
</template>

<script setup>
import { defineProps } from "vue";

const { label, amount } = defineProps({
  label: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});
</script>
