<template>
  <main class="flex flex-col gap-4 justify-center items-center p-4 my-12">
    <Heading2xl label="Wellcome Back" />
    <LoginForm />
  </main>
</template>

<script setup>
import Heading2xl from "../components/atom/Heading2xl.vue";
import LoginForm from "../components/organisms/LoginForm.vue";
</script>
