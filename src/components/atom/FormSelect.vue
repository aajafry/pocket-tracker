<template>
  <div class="flex flex-col">
    <label class="pb-2 text-[#777] dark:text-gray-300" :for="name">{{
      label
    }}</label>
    <select
      :name="name"
      :id="name"
      class="dark:bg-[#475569] border-[1px] border-slate-400"
      :value="modelValue"
      @change="onChange($event.target.value)"
    >
      <option value="" disabled>Select an option</option>
      <option value="income">Income</option>
      <option value="expense">Expense</option>
    </select>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const { name, label, modelValue } = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  modelValue: String
});

const emit = defineEmits('update:modelValue')

const onChange = (value) => {
  emit('update:modelValue', value)
}
</script>
