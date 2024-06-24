<template>
  <form
    class="flex flex-col gap-4 w-full max-w-md"
    @submit.prevent="handleEmilLogIn"
  >
    <FormInput
      type="email"
      name="loginEmail"
      placeholder="example@gmail.com"
      v-model="formData.email"
    />
    <FormInput
      type="password"
      name="loginPassword"
      placeholder="12345678"
      v-model="formData.password"
    />

    <FormButton label="Continue" type="submit" :isSubmitted="isSubmitted" />
    <FormQuery formStatus="login" />
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

const formData = ref({
  email: "",
  password: "",
});

const reaetForm = () => {
  formData.value = {
    email: "",
    password: "",
  };
};

const router = useRouter();

const handleEmilLogIn = async () => {
  const { email, password } = formData.value;

  if (email && password) {
    try {
      const {
        data: { token },
      } = await axios.post(
        "https://pocket-tracker-api.vercel.app/api/user/login",
        formData.value
      );
      localStorage.setItem("token", token);

      isSubmitted.value = true;
      reaetForm();

      setTimeout(() => {
        isSubmitted.value = false;
      }, 1000);

      router.push({
        name: "Dashboard",
      });
      window.dispatchEvent(new Event("storage"));
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("Invalid credentials!");
  }
};
</script>
