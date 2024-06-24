<template>
  <div class="text-lg">
    <StatusHeading :label="label" />
    <StatusAmount :label="label" :amount="amount" />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import StatusHeading from "../atom/StatusHeading.vue";
import StatusAmount from "../atom/StatusAmount.vue";

const { label, amount } = defineProps({
  label: {
    type: String,
    required: true,
    validator: (value) => ["income", "expense", "balance"].includes(value),
  },
  amount: {
    type: Number,
    required: true,
  },
});
</script>