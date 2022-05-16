<script>
export default {
    name: "Heading",
    props: {
        title: ""
    }
}
</script>

<template>
    <div class="w-full my-3 border-b-2 border-white/30 px-2">
        <p class="text-white text-xl ">{{title}}</p>
    </div>
</template>