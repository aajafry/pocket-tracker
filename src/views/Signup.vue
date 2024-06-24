<template>
  <main class="flex flex-col gap-4 justify-center items-center p-4 my-11">
    <Heading2xl label="Create an Account" />
    <SignupForm />
  </main>
</template>

<script setup>
import Heading2xl from "../components/atom/Heading2xl.vue";
import SignupForm from "../components/organisms/SignupForm.vue";
</script>
