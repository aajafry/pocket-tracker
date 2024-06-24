<template>
  <div>
    <SectionHeading label="Balance History" />
    <div class="flex flex-col gap-4 py-4">
      <template v-if="transactions && transactions.length > 0">
        <div
          class="flex items-center historyWrapper"
          v-for="transaction in transactions"
          :key="transaction?._id"
        >
          <History :transaction="transaction" />
          <Trash
            class="flex-auto cursor-pointer closeBtn"
            @click="removeTransaction(transaction?._id)"
          />
        </div>
      </template>
      <AlternativeContent v-else />
    </div>
  </div>
</template>

<script setup>
import SectionHeading from "../atom/SectionHeading.vue";
import History from "../molecules/History.vue";
import Trash from "../atom/icons/Trash.vue";
import AlternativeContent from "../atom/AlternativeContent.vue";
import { defineProps, defineEmits } from "vue";


const { transactions } = defineProps({
  transactions: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const emit = defineEmits(["removeTransaction"]);

const removeTransaction = (id) => {
  emit("removeTransaction", id);
};

</script>

<style scoped>
.closeBtn {
  display: none;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.7s ease, visibility 0.7s ease;
}

.historyWrapper:hover .closeBtn {
  display: block;
  opacity: 1;
  visibility: visible;
}
</style>
