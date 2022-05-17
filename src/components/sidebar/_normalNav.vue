<script>
import User from "./common/user.vue";
import Heading from "./common/heading.vue";
import NavItem from "./common/navItem.vue";

export default {
  name: "NormalNav",
  components: {
    User,
    Heading,
    NavItem,
  },
};
</script>

<template>
  <nav
    class="transition duration-300 ease-in-out hidden -translate-x-full md:translate-x-0 bg-purple-800  text-slate-200 h-screen w-96 md:flex md:flex-col md:justify-between items-center px-2 rounded-r-xl drop-shadow shadow-3xl"
  >

    <ul class="w-full">
    <User name="John Doe" />
      <Heading title="Main" />
      <NavItem title="Your Podlights" link="/dashboard" alert=0 />
      <NavItem title="Player Controls" link="/dashboard/proof" alert="0" />
    </ul>

    <ul class="flex flex-col mb-4 w-full">
        <button class="py-4 h-16 flex flex-row justify-between items-center px-6 my-2 w-full bg-gray-900 hover:bg-gray-800 transition hover:drop-shadow-lg rounded-3xl text-white font-semibold">Log in with Spotify <img class="h-8" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1000logos.net%2Fwp-content%2Fuploads%2F2017%2F08%2FSpotify-Logo.png&f=1&nofb=1"> </button>
        <button class="py-4 h-16 flex flex-row justify-between items-center px-6 my-2 w-full bg-white rounded-3xl transition hover:drop-shadow-lg  text-black font-semibold">Log in with Notion <img class="w-8 h-8" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2019%2F06%2FNotion_App_Logo.png&f=1&nofb=1" alt=""></button>
    </ul>
  </nav>
</template>
