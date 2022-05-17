<script>
import { RouterLink} from 'vue-router'
export default {
    name: "NavItem",
    props: {
        title: "",
        alert: 0,
        link: "",
        on: false,
    },

}
</script>

<template>
    <routerLink :to="link" class="w-full py-4 px-2 bg-white/20 hover:bg-white/50 cursor-pointer rounded-xl flex flex-row items-center justify-between mb-4">
        <span class="text-slate-200 text-lg font-medium">{{title}}</span>
        <span v-if="alert > 0" class="py-1 px-3 bg-red-500/50 text-white rounded-xl">{{alert}}</span>
    </routerLink>
</template>