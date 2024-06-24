<template>
  <div class="flex flex-col">
    <label v-if="label" class="pb-2 text-[#777] dark:text-gray-300" :for="name">{{
      label
    }}</label>
     <input
      :type="type ? type : 'text'"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      autocomplete="off"
      class="dark:bg-[#475569] border-[1px] border-slate-400"
      :value="modelValue"
      @input="onInput($event.target.value)"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const { type, name, label, placeholder, modelValue } = defineProps({
  type:{
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: false,
  },
  placeholder: {
    type: String,
    required: true,
  },
  modelValue: [String, Number]
});

const emit = defineEmits("update:modelValue")


const onInput = (value) => {
  emit('update:modelValue', value)
}

</script>
