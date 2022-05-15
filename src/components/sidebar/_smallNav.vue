<script>
import User from "./common/user.vue"
export default {
    name: "SmallNav",
    components: {
        User
    },
    data() {
        return {
            display: false,
        }
    },
    methods: {
        log() {
            this.display = !this.display;
            console.log(this.display)
        }
    }    

}
</script>

<template>
    <nav class="z-10 transition duration-300 ease-in-out translate-y-0 md:-translate-y-full bg-purple-800 dark:bg-slate-700 text-slate-200 w-screen h-16 overflow-auto shadow-lg flex flex-col justify-center items-end px-4">
        <button @click="log()" class="p-3 px-5 bg-slate-600 rounded-xl">More</button>
    </nav>
    <Transition name="nav">
        <nav v-if="display" class="bg-slate-400 h-64 w-full p-6 md:hidden" >
        <User name="Matiss Jurevics" />
    </nav>
    </Transition>
    
</template>

<style scoped>
.nav-enter-active,
.nav-leave-active {
  transition: all 0.5s ease;
}

.nav-enter-from,
.nav-leave-to {
  transform: translateY(-130%)
}
</style>