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
    <div class="flex flex-row min-h-screen bg-gray-100 text-gray-800">
        <Sidebar />
    </div>
</template>