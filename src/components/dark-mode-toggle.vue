<template>
  <label class="switch">
    <input @click="toggleDarkMode" type="checkbox" :checked="isDarkTheme"/>
    <span class="slider"></span>
  </label>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isDarkTheme = ref(false);

const toggleDarkMode = () => {
  isDarkTheme.value = !isDarkTheme.value;
  document.documentElement.setAttribute("data-theme",isDarkTheme.value ? "dark" : "nord");
  localStorage.setItem("theme",isDarkTheme.value)
};

onMounted(() =>{
  isDarkTheme.value = localStorage.getItem("theme") === "true";
  document.documentElement.setAttribute("data-theme",isDarkTheme.value ? "dark" : "nord")
})
</script>

<style scoped>
.switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #2196f3;
  transition: 0.4s;
  border-radius: 30px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 1.4em;
  width: 1.4em;
  border-radius: 20px;
  left: 0.3em;
  bottom: 0.3em;
  background-color: yellow;
  transition: 0.4s;
}

.switch input:checked + .slider:before {
  background-color: black;
  border-radius: 50px;
  box-shadow: inset 9px 0px 1px 0px white;
}

.switch input:checked + .slider {
  background-color: black;
}

.switch input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

.switch input:checked + .slider:before {
  transform: translateX(1.5em);
}
</style>
