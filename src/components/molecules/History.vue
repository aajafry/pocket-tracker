<template>
  <div
    class="flex justify-between flex-[80%] py-2 px-3 bg-white dark:bg-slate-700 border-l-4"
    :class="
      transaction?.type === 'income' ? ' border-green-500' : ' border-red-500'
    "
  >
    <HistoryHeading :transactionName="transaction?.name" />
    <HistoryAmount :transactionAmount="transaction?.amount" />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import HistoryHeading from "../atom/HistoryHeading.vue";
import HistoryAmount from "../atom/HistoryAmount.vue";

const { transaction } = defineProps({
  transaction: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});
</script>
