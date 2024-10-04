<template>
  <section class="p-5">
    <div class="text-center mt-5">
      <h1 class="text-4xl">My Work</h1>
      <div class="mt-1">
        <span class="text-lg">{ Click on a project to see more details }</span>
      </div>
    </div>
    <div class="main">
      <div
        class="card"
        v-for="(cardProject, index) in allCardProjects"
        :key="index"
        @click="showDialog(index)"
      >
        <div class="card2">
          <img
            :src="cardProject.image"
            alt="Project Image"
            class="text-white h-[350px] rounded-md"
            width="460px"
          />
        </div>
      </div>
    </div>
    <div v-if="loading" class="main">
      <div
        v-for="index in 6"
        :key="index"
        class="skeleton h-[350px] w-[350px] relative bottom-[3.5rem]"
      ></div>
    </div>
  </section>

  <dialogModal
    v-if="selectedProject"
    :title="selectedProject.title"
    :descriptions="selectedProject.descriptions"
    :technologyUsed="selectedProject.technologyUsed"
    :url="selectedProject.url"
  />
</template>

<script setup>
import { ref, onMounted } from "vue";
import comingProject from "@/assets/coming-project.webp";
import usernameGithubGif from "@/assets/username-github.gif";
import weatherApp from "@/assets/weather-app.gif";
import shopifyApi from "@/assets/shopify-api.gif";
import dialogModal from "@/components/dialog-modal.vue"
import { nextTick } from 'vue';

const loading = ref(true);
const allCardProjects = ref([]);
const selectedProject = ref(null);

const dialogInfo = [
  {
    title: "GitHub Username Search",
    descriptions: "This app is used to find usernames on GitHub by searching the account's username and providing additional user information like profile picture and a direct link to the account.",
    technologyUsed: "Vue.js(Composition Api), Github API, Tailwind CSS, DaisyUI",
    url: "https://username-github-search.vercel.app/"
  },
  {
    title: "Weather App",
    descriptions: "A weather app that provides real-time weather information based on the user's location.",
    technologyUsed: "Vue.js(Composition Api), OpenWeather API, Tailwind CSS, DaisyUI",
    url: "https://weather-app-vuee.vercel.app/"
  },
  {
    title: "Shopify API Integration",
    descriptions: "This project is using UI from KDMV shopify, this project also integrated with Shopify's API to manage products and orders.",
    technologyUsed: "Vue.js(Composition Api), Shopify API, Tailwind CSS",
    url: "https://shopify-api-integration.vercel.app/"
  }
];

onMounted(() => {
  setTimeout(() => {
    allCardProjects.value = [

      { image: usernameGithubGif },
      { image: weatherApp },
      { image: shopifyApi },
      { image: comingProject },
      { image: comingProject },
      { image: comingProject }
    ];
    loading.value = false;
  }, 1500);
});

async function showDialog(index) {
  selectedProject.value = dialogInfo[index];
  await nextTick();
  document.getElementById("my_modal_3").showModal();
}
</script>

<style scoped>
.main {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  margin: auto;
  justify-items: center;
  max-width: 1200px;
  gap: 1.5rem;
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
}

.card {
  width: 100%;
  max-width: 460px;
  height: 350px;
  background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  border-radius: 10px;
  transition: all 0.3s;
  box-shadow: 0px 0px 10px 0px rgba(0, 255, 117, 0.3);
}

.card2 {
  width: 100%;
  max-width: 460px;
  height: 350px;
  border-radius: 10px;
  background-color: #1a1a1a;
  transition: all 0.2s;
}

.card2:hover {
  transform: scale(0.98);
  border-radius: 10px;
  cursor: pointer;
}

.card:hover {
  box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);
  border-radius: 10px;
}
</style>
