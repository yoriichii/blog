<template>
  <div
    class="hero md:h-[45vh] lg:h-[30vh]"
    v-for="(card, index) in cardEvents"
    :key="index"
  >
    <div class="hero-content flex-col lg:flex-row -z-10 sm:w-[70%] md:w-[90%]">
      <img
        :src="card.image"
        class="max-w-sm rounded-lg shadow-2xl object-cover h-40 w-72 col-span-1 bg-center"
      />
      <div class="ml-16 mb-10 relative z-20">
        <h1 class="text-2xl font-bold mt-5">{{ card.title }}</h1>
        <p class="py-6">
          {{ card.para }}
        </p>
        <a :href="card.url" target="_blank">
          <button class="btn bg-purple-700 text-white border-none btn-sm">
            Demo
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  cardEvents: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped></style>
