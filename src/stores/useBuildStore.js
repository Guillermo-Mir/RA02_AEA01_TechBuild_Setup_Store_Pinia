import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { groupBy } from 'lodash'



export const useBuildStore = defineStore('BuildStore', () => {
    //state
    const components = ref([])

    //getters
    const totalPrice = computed(() => components.value.reduce((acomulador, elemento) => acomulador + elemento.price, 0))
     const groupedByType = computed(()=> {
        const grouped = groupBy(items.value, (item)=> item.type)
        const sorted = Object.keys(grouped).sort()
        let inOrder = {}
        sorted.forEach((key)=> (inOrder[key] = grouped[key]))

        return inOrder
    })
    

    //actions
    function addComponent(){
         contador = parseInt(contador)
        for (let i = 0; i < contador; i++) {
            items.value.push(item)
        }
    }

    const removeComponent =  (itemName) => (items.value = items.value.filter((item) => item.name != itemName))


    const checkout = () => {}

  return {components, totalPrice, groupedByType, addComponent, removeComponent, checkout}
})