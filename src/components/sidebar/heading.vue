<script>
export default {
    name: "Heading",
    props: {
        title: ""
    }
}
</script>

<template>
    <li class="my-px">
            <span
              class="flex font-medium text-sm text-slate-200 px-4 my-4 uppercase"
              >{{title}}</span
            >
          </li>
</template>