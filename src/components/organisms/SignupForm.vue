<template>
  <form
    class="flex flex-col gap-4 w-full max-w-md"
    @submit.prevent="handleEmilLogIn"
  >
    <FormInput
      type="text"
      name="signupName"
      placeholder="Jone Doe"
      v-model="formData.name"
    />
    <FormInput
      type="email"
      name="signupEmail"
      placeholder="example@gmail.com"
      v-model="formData.email"
    />
    <FormInput
      type="password"
      name="signupPassword"
      placeholder="12345678"
      v-model="formData.password"
    />
    <FormButton label="Continue" type="submit" :isSubmitted="isSubmitted" />
    <FormQuery formStatus="signup" />
  </form>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
import FormButton from "../atom/FormButton.vue";
import FormInput from "../atom/FormInput.vue";
import FormQuery from "../atom/FormQuery.vue";

let isSubmitted = ref(false);

const router = useRouter();

const formData = ref({
  name: "",
  email: "",
  password: "",
});

const resetForm = () => {
  formData.value = {
    name: "",
    email: "",
    password: "",
  };
};

const handleEmilLogIn = async () => {
  const { name, email, password } = formData.value;

  if (name && email && password) {
    try {
      await axios.post(
        "https://pocket-tracker-api.vercel.app/api/user/register",
        formData.value
      );

      isSubmitted.value = true;
      resetForm();
      setTimeout(() => {
        isSubmitted.value = false;
      }, 1000);

      router.push({
        name: "Login",
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("invalid credentials!");
  }
};
</script>
