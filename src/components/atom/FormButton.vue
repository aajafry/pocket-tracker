<template>
  <button
    :type="type"
    class="py-2 px-3 mt-4 rounded border-[1px] border-slate-400 text-white font-medium bg-indigo-600 hover:bg-indigo-700 transition-all duration-300"
    :class="isSubmitted ? 'cursor-not-allowed' : 'cursor-pointer'"
    :disabled="isSubmitted"
  >
    {{ label }}
  </button>
</template>

<script setup>
import { defineProps } from "vue";

const { isSubmitted } = defineProps({
  isSubmitted: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: "Submit",
  },
  type: {
    type: String,
  },
});
</script>

