<script>
import List from "./_highlightList.vue"
import Searchbar from "./_searchbar.vue"
export default {
    name: "Screen",
    components: {
        List,
        Searchbar
    }
}
</script>

<template>
        <section class="w-full h-screen overflow-y-scroll">
            <div class="w-full h-24 md:h-40 flex flex-row items-end px-8 border-b-2 border-gray-600/50">
                <h1 class="text-4xl font-bold">Saved Highlights</h1>
            </div>
            <Searchbar />
            <List />
            
        </section>
</template>