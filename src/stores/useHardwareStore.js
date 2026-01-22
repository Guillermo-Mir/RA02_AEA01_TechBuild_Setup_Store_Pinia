import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import hardware from '@/data/products.json'



export const useHardwareStore = defineStore('HardwareStore', () => {
  //state

  const productRef = ref([])
  //const productRef = ref(products)

  
  //faltan getters


  //actions 
  function loadHardware(){
    productRef.value = hardware
  }

  return {productRef, loadHardware}
})