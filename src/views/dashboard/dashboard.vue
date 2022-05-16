<script>
import Sidebar from "@/components/sidebar/sidebar.vue"
export default {
    name: "dashboard",
    components: {
        Sidebar,
    }
}
</script>

<template>
    <div class="flex flex-col md:flex-row min-h-screen bg-gray-100 text-gray-800">
        <Sidebar />
        <section class="w-full h-screen bg-gray-300">
        </section>
    </div>
    

   
</template>