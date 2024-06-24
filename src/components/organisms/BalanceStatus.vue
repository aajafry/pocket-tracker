<template>
  <div>
    <SectionHeading label="Balance Status" />
    <div class="flex justify-between gap-4 py-4 uppercase">
      <Status label="income" :amount="income" />
      <Status label="expense" :amount="expense" />
      <Status label="balance" :amount="balance" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import SectionHeading from "../atom/SectionHeading.vue";
import Status from "../molecules/Status.vue";

const { income, expense, balance } = defineProps({
  income: {
    type: Number,
    required: true,
    default: 0,
  },
  expense: {
    type: Number,
    required: true,
    default: 0,
  },
  balance: {
    type: Number,
    required: true,
    default: 0,
  },
});
</script>
