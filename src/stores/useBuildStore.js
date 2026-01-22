import { ref, computed } from 'vue'
import { defineStore } from 'pinia'




export const useBuildStore = defineStore('BuildStore', () => {
    //state
    const components = ref([])

    //getters
    const totalPrice = computed()
    
    const groupedByType = computed(()=>{

    })

    //actions
    function addComponent(){

    }

    function removeComponent(){
        
    }

    function checkout(){
        
    }

  return {components, totalPrice, groupedByType, addComponent, removeComponent, checkout}
})