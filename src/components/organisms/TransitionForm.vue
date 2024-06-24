<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col gap-3 sm:w-[80%]">
    <SectionHeading label="Add New Transition" />
    <FormSelect 
      name="trType" 
      label="Select Transition Type"
      v-model="formData.type"
    />
    <FormInput
      name="trName"
      label="Enter Transition Name"
      placeholder="e.g: shopping"
      type="text"
      v-model="formData.name"
    />
    <FormInput
      name="trAmount"
      label="Enter Transition Amount"
      placeholder="e.g: 5000"
      type="number"
      v-model="formData.amount"
    />

    <FormButton
      label="Add Transition"
      type="submit"
      :isSubmitted="isSubmitted"
    />
  </form>
</template>

<script setup>
import { defineEmits, ref } from "vue";
import { useToast } from "vue-toastification";
import FormButton from "../atom/FormButton.vue";
import FormInput from "../atom/FormInput.vue";
import FormSelect from "../atom/FormSelect.vue";
import SectionHeading from "../atom/SectionHeading.vue";

let isSubmitted = ref(false);
const toast = useToast();
const emit = defineEmits(["addTransaction"]);

const formData = ref({
  name: "",
  amount: null,
  type: ""
})

const resetForm = () => {
  formData.value = {
    name: "",
    amount: null,
    type: ""
  }
}

const handleSubmit = () => {
  const { name, amount, type } = formData.value;

  if (name && !isNaN(amount) && type) {
    emit("addTransaction", {
      name: name,
      amount: amount,
      type: type,
    })
    isSubmitted.value = true
    resetForm();
    setTimeout(() => {
      isSubmitted.value = false;
    }, 1000);
    toast.success("Successfully Added Transaction");
  } else {
    toast.error("All Fields are Required");
  }
}
</script>
