<template>
  <div
    class="px-10 min-h-dvh bg-[#f7f7f7] text-[#000] dark:bg-[#1e293b] dark:text-white"
  >
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import Footer from "./components/organisms/Footer.vue";
import Header from "./components/organisms/Header.vue";
</script>
