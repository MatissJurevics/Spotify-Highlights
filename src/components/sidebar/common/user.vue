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
    class="hover:bg-white/50 cursor-pointer  w-full py-4 px-2 md:px-0 md:my-4 rounded-xl flex flex-row justify-center items-center"
  >
    <img src="https://avatars.dicebear.com/api/identicon/sfg.svg?size=50&backgroundColor=white" class="w-[50px] h-[50px] rounded-full mr-3" />
    <span class="font-semibold text-lg w-2/3 text-slate-200">{{name}}</span>
  </div>
</template>
