<template>
  <div>
    <div >
      <sidebar />
    </div>
    <div class="flex-1">
      <router-view></router-view>
    </div>
    <footerVue />
  </div>
</template>

<script setup>
import sidebar from "./components/sidebar.vue";
import footerVue from "./components/footer.vue";
</script>

<style scoped>
.footer {
  margin-top: auto;
}
</style>
