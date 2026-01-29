<script setup>
import ComponentCard from './components/ComponentCard.vue';
import CurrentBuildWidget from './components/CurrentBuildWidget.vue';
import NavBar from './components/NavBar.vue';
import { useBuildStore } from './stores/useBuildStore';
import { useHardwareStore } from './stores/useHardwareStore';
import { storeToRefs } from 'pinia';

const HardwareStore = useHardwareStore()
HardwareStore.loadHardware()

const BuildStore = useBuildStore()

const { productRef } = storeToRefs(useHardwareStore())

</script>
<template>
  <div>
    <NavBar />
    <main class="container">
      <h1>Components Disponibles</h1>
      <ul class="product-grid">
        <ComponentCard v-for="component in productRef" 
          :key="component.name" 
          :component="component"
          @addComponent="BuildStore.addComponent($event, component)" 
        />
      </ul>
      <CurrentBuildWidget/>
    </main>
  </div>
</template>

<style scoped>
.container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  font-family: sans-serif;
  margin-bottom: 1.5rem;
  color: #333;
}

.product-grid {
  display: flex;            
  flex-direction: row;      
  gap: 1.5rem;             
  padding: 1rem 0;
  margin: 0;
  list-style: none;
  

  overflow-x: auto;         
  scrollbar-width: thin;    
  padding-bottom: 20px;     
}


.product-grid::-webkit-scrollbar {
  height: 8px;
}

.product-grid::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 10px;
}

.product-grid::-webkit-scrollbar-track {
  background: #f1f1f1;
}
</style>