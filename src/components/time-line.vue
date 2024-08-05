<template>
  <ul
    class="timeline timeline-snap-icon timeline-compact timeline-vertical -z-10"
  >
    <li v-for="(event, index) in events" :key="index">
      <hr v-if="index > 0" />
      <div class="timeline-middle text-green-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="h-5 w-5"
        >
          <path
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div class="timeline-end mb-10">
        <div class="text-lg font-black">{{ event.title }}</div>
        {{ event.description }}
      </div>
      <hr v-if="index < events.length - 1" />
    </li>
  </ul>
</template>

<script setup>
defineProps({
  events: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped></style>
