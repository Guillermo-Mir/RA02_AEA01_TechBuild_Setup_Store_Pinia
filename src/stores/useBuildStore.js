import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { groupBy } from 'lodash'



export const useBuildStore = defineStore('BuildStore', () => {
    //state
    const components = ref([])

    //getters
    const totalPrice = computed(() => components.value.reduce((acomulador, elemento) => acomulador + elemento.price, 0))
     
    const groupedByType = computed(()=> {
        const grouped = groupBy(components.value, (item)=> item.type)
        const sorted = Object.keys(grouped).sort()
        let inOrder = {}
        sorted.forEach((key)=> (inOrder[key] = grouped[key]))

        return inOrder
    })
    

    //actions
    function addComponent(item){
        components.value.push(item)
        console.log(item)
        console.log(components)
    }

    const removeComponent =  (itemName) => {
         const product = components.value.findIndex(item => item.name === itemName)
        if (product !== -1) {
            components.value.splice(product, 1)
        }
    }


    const checkout = () => {
        alert("Compra realitzada!!!")
        components.value = [] 
    }

  return {components, totalPrice, groupedByType, addComponent, removeComponent, checkout}
})