<script setup lang="ts">
import {RouterLink} from "vue-router"

</script>

<template>
<main class="w-screen h-screen flex flex-col justify-center items-center">
  <h1>Homepage</h1>
  <router-link to="dashboard" class="p-2 bg-gray-400 rounded-lg text-white hover:bg-gray-300 m-4">Go to dashboard</router-link>
</main>

</template>
