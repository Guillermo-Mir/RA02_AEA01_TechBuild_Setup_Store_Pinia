<script setup>
// imports
import ComponentCard from './ComponentCard.vue';
</script>

<template>
  <header 
    class="flex justify-between p-6 mb-10 items-center"
    style="background-image: url('/images/double-bubble-outline.png')"
  >
    <h1 class="text-4xl text-gray-700 font-bold">TechBuilds</h1>
    <ComponentCard/>
  </header>
</template>

<style>

header{
    background-color: black;
}
h1{
    color:#5694DB;
}

</style>