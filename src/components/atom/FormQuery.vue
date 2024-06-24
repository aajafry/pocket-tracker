<template>
  <p>
    {{
      formStatus.toLowerCase() === "login"
        ? "Don't have an account?"
        : "Already have an account?"
    }}
    <router-Link
      :to="formStatus.toLowerCase() === 'login' ? '/signup' : '/login'"
      class="text-indigo-600"
      >{{
        formStatus.toLowerCase() === "login" ? "Sign Up" : "Login"
      }}</router-Link
    >
  </p>
</template>

<script setup>
import { defineProps } from "vue";

const { formStatus } = defineProps({
  formStatus: {
    type: String,
    required: true,
  },
});
</script>
