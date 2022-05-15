<script>
import SmallNav from "./_smallNav.vue"
import NormalNav from "./_normalNav.vue"
export default {
    name: "Sidebar",
    components: {
        SmallNav,
        NormalNav
    }
}
</script>

<template>
    <SmallNav />
    <NormalNav />
</template>