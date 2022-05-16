<script>
import User from "./common/user.vue"
import Heading from "./common/heading.vue"
import NavItem from "./common/navItem.vue"
export default {
    name: "SmallNav",
    components: {
        User,
        Heading,
        NavItem,
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
    <nav class="z-10 transition duration-300 ease-in-out translate-y-0 md:-translate-y-full md:hidden md:shadow-none bg-purple-800  text-slate-200 w-screen h-16 overflow-auto shadow-lg flex flex-col justify-center items-end px-4">
        <button @click="log()" class="p-3 px-5 bg-white/30 hover:bg-white/50 rounded-xl">More</button>
    </nav>
    <Transition name="nav">
        <nav v-if="display" class="bg-purple-700 h-fit w-full p-6 md:hidden" >
        <User name="Matiss Jurevics" />
        <Heading title="Main" />
        <NavItem title="Your Podlights" alert=0 />
        <NavItem title="Test 2" alert=0 />
            <ul class="flex flex-col mt-8 mb-4 w-full">
        <button class="py-4 h-16 flex flex-row justify-between items-center px-6 my-2 w-full bg-gray-900 hover:bg-gray-800 transition hover:drop-shadow-lg rounded-3xl text-white font-semibold">Log in with Spotify <img class="h-8" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1000logos.net%2Fwp-content%2Fuploads%2F2017%2F08%2FSpotify-Logo.png&f=1&nofb=1"> </button>
        <button class="py-4 h-16 flex flex-row justify-between items-center px-6 my-2 w-full bg-white rounded-3xl transition hover:drop-shadow-lg  text-black font-semibold">Log in with Notion <img class="w-8 h-8" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2019%2F06%2FNotion_App_Logo.png&f=1&nofb=1" alt=""></button>
        </ul>
        <div class="flex flex-row justify-end items-center">
        <button @click="log()" class="text-3xl text-slate-200 bg-transparent">X</button>
        </div>
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