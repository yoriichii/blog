<template>
  <div>
    <!-- You can open the modal using ID.showModal() method -->
    <button class="btn" onclick="my_modal_3.showModal()">open modal</button>
    <dialog id="my_modal_3" class="modal">
      <div class="modal-box  max-w-2xl">
        <form method="dialog">
          <button
            class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          > 
            ✕
          </button>
      
        </form>
        <h3 class="text-lg font-bold">{{ title }}</h3>
        <p class="py-4">{{ descriptions }} </p>
        <p class="py-4 text"><span class="text-[1.1rem] font-bold opacity-60">Technology:</span> {{ technologyUsed }}</p>
        <a :href="url" target="_blank" class="btn rounded-md float-end" >
          Demo
        </a>
      </div>
    </dialog>
  </div>
</template>

<script setup>
defineProps({
    title:{
        type: String
    },
    descriptions:{
        type: String 
    },
    technologyUsed:{
        type: String 
    },
    url:{
        type: String
    }
})
</script>

<style scoped>
</style>