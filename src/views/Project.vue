<template>
  <div class="flex flex-col items-center">
    <div>
      <cardProject :cardEvents="cardProjects1" />
    </div>
    <div>
      <cardProject :cardEvents="cardProjects2" />
    </div>
    <div>
      <cardProject :cardEvents="cardProjects3" />
    </div>
  </div>
</template>

<script setup>
import cardProject from "../components/card-project.vue";

const cardProjects1 = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6zs5Noz8Xlz1aWOkwIZDKT1OHyD5wz31jvg&s",
    title: "Blog",
    para: "Written blogs to inspiration my knowledge and challenge.",
    url: "https://web.facebook.com/",
  },
];
const cardProjects2 = [
  {
    image:
      "https://imgs.search.brave.com/h6A6v_vDTm7nTSaFAFSGZQ_alYK8amNzOJA6Y6NJQjc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by92/aWV3LTNkLWNpbmVt/YS10aGVhdHJlLXJv/b21fMjMtMjE1MDg2/NjA2Ny5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw",
    title: "Cinema",
    para: "Building cinemas website for booking ticket and more.",
    url: "",
  },
];
const cardProjects3 = [
  {
    image:
      "https://imgs.search.brave.com/PWPRYq7J-jD45m_TC9GScaMOBLsB-380AZepk-07i0E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9vbmxpbmUtc2hv/cHBpbmctd2l0aC1j/b21wdXRlci1jYXJ0/LXBhY2thZ2VzLWdp/ZnQtYm94XzEzMDUz/ODUtMjYxMi5qcGc_/c2l6ZT02MjYmZXh0/PWpwZw",
    title: "Shopping",
    para: "This Shopping website for client business online store.",
    url: "",
  },
];
</script>

<style lang="scss" scoped></style>
