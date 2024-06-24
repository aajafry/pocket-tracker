<template>
  <header
    class="flex justify-between items-center py-4 border-b-2 border-[#bbb] dark:border-slate-600"
  >
    <Logo />
    <div class="flex gap-3 items-center">
      <Logout v-if="isLoggedIn" />
      <ToggleTheme />
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Logo from "../molecules/Logo.vue";
import ToggleTheme from "../atom/ToggleTheme.vue";
import Logout from "../molecules/Logout.vue";

const isLoggedIn = ref(false);

const checkToken = () => {
  isLoggedIn.value = localStorage.getItem("token") ? true : false;
};

onMounted(() => {
  checkToken();
  window.addEventListener("storage", checkToken);
});

onBeforeUnmount(() => {
  window.removeEventListener("storage", checkToken);
});
</script>
