<script>
export default {
    name: "User",
    props: {
        name: ""
    }
};
</script>

<template>
  <div
    class="dark:bg-slate-600 bg-purple-700 w-5/6 py-4 px-2 md:my-4 rounded-xl flex flex-row items-center"
  >
    <div class="min-w-[50px] min-h-[50px] rounded-full bg-slate-400 mr-3" />
    <span class="font-semibold text-lg w-2/3">{{name}}</span>
  </div>
</template>
