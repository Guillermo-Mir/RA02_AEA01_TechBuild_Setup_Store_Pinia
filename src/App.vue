<script setup>
import ComponentCard from './components/ComponentCard.vue';
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
    <main>
      <h1>Components Disponibles</h1>
      <ul>
        <ComponentCard v-for="component in productRef" 
        :key="component.name" 
        :component="component"
        @addComponent="BuildStore.addComponent($event, component)" />
      </ul>
    </main>
  </div>
</template>
