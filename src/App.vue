<script setup>
import NavBar from "@/components/NavBar.vue";



</script>

<template>
  <div class="container">
    <NavBar />
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <!--ProductCard
        v-for="product in productRef"
        :key="product.name"
        :product="product" 
        @addToCart = "CartStore.addToCart($event, product)"
      /-->
    </ul>
  </div>
</template>
