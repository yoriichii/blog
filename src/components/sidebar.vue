<template>
  <nav class=" border-gray-200 py-2.5 dark:bg-gray-900">
    <div class="flex flex-wrap items-center justify-center px-4 mx-auto">
      <div></div>
      <ul class="flex gap-5">
        <li v-for="(item, index) in menuItems" :key="index">
          <router-link
            :to="item.path"
            class="block py-3 px-3 rounded-full hover:scale-110 transition duration-300 ease-in-out"
            :class="{
              'text-white bg-purple-700 hover:text-black':
                $route.path === item.path,
            }"
            aria-current="page"
            ><img :src="item?.image" alt=""
          /></router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import homeImage from "../assets/home.png";
import notesImage from "../assets/notes.png";
import ideaImage from "../assets/idea.png";

const menuItems = [
  { name: "Home", path: "/", image: homeImage },
  { name: "About", path: "/about", image: notesImage },
  // { name: "Project", path: "/project", image: ideaImage },
];
</script>

<style scoped></style>
