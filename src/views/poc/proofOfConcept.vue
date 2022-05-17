<script>
import Sidebar from "@/components/sidebar/sidebar.vue"
import Main from "./main.vue"
export default {
    name: "Proof",
    components: {
        Sidebar,
        Main
    }
}
</script>

<template>
    <div class="flex flex-col md:flex-row min-h-screen bg-gray-100 text-gray-800">
        <Sidebar />
        <Main />

    </div>
    

   
</template>