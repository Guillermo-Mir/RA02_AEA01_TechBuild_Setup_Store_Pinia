<script setup>
import NavBar from './NavBar.vue';

//Un component senzill que rep 
// un objecte component i emet 
// l'esdeveniment add quan es clica.


const props = defineProps({
  component: Object,
});

//emit
defineEmits(["addComponent"])
</script>

<template>
  <li>
    <div>
      <img src="" alt="hardware" />
    </div>

    <div>
        <h3>{{ component.name }}</h3>
        <span>{{ component.type }}</span>
        <p class="preu">{{ component.price }}€</p>
      
        <button @click="$emit('onAddComponent')" >
            Afegir al Muntatge
        </button>
    </div>
  </li>
</template>

<style scoped>
    img{
        width: 100px;
        height: 100px;
    }
    

</style>