<script>
import User from "./common/user.vue"
export default {
   name: "NormalNav",
   components: {
       User
   } 
}
</script>

<template>
    <nav class="transition duration-300 ease-in-out hidden -translate-x-full md:translate-x-0 bg-purple-800 dark:bg-slate-700 text-slate-200 h-screen w-64 md:flex md:flex-col items-center">
        <User name="Matiss Jurevics" />


    </nav>
</template>