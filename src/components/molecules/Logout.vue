<template>
  <div class="flex gap-2 items-center">
    <LogoutIcon class="cursor-pointer" @click="logout" />
    <p>{{userName}}</p>
  </div>
</template>

<script setup>
import LogoutIcon from "../atom/icons/Logout.vue";
import { useRouter } from "vue-router";
import { jwtDecode } from "jwt-decode";

const token = localStorage.getItem("token");
const decoded = jwtDecode(token)
const {name: userName} = decoded;

const router = useRouter();

const logout = () => {
  localStorage.removeItem("token");
  router.push({ name: "Login" });
  window.dispatchEvent(new Event("storage"));
};
</script>
