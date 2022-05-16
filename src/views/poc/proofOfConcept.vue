<script>
import Sidebar from "@/components/sidebar/sidebar.vue"
import Screen from "./_screen.vue"
export default {
    name: "dashboard",
    components: {
        Sidebar,
        Screen
    }
}
</script>

<template>
    <div class="flex flex-col md:flex-row min-h-screen bg-gray-100 text-gray-800">
        <Sidebar />
        <Screen />
    </div>
    

   
</template>