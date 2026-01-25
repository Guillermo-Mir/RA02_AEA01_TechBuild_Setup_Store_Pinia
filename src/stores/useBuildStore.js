import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { groupBy } from 'lodash'



export const useBuildStore = defineStore('BuildStore', () => {
    //state
    const components = ref([])

    //getters
    const totalPrice = computed(() => components.value.reduce((acomulador, elemento) => acomulador + elemento.price, 0))
    const groupedByType = groupBy(components.value, (item) => item.type)
    

    //actions
    function addComponent(){

    }

    function removeComponent(){
        
    }

    function checkout(){
        
    }

  return {components, totalPrice, groupedByType, addComponent, removeComponent, checkout}
})