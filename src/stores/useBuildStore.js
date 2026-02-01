import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBuildStore = defineStore('BuildStore', () => {
  // STATE
  const components = ref([])

  // GETTERS
  const totalPrice = computed(() =>
    components.value.reduce((acc, item) => acc + item.price, 0)
  )

  const groupedByType = computed(() => {
    const grouped = {}

    components.value.forEach(item => {
      if (!grouped[item.type]) {
        grouped[item.type] = {}
      }

      if (!grouped[item.type][item.name]) {
        grouped[item.type][item.name] = {
          ...item,
          quantity: 1
        }
      } else {
        grouped[item.type][item.name].quantity++
      }
    })

    Object.keys(grouped).forEach(type => {
      grouped[type] = Object.values(grouped[type])
    })

    return grouped
  })

  // ACTIONS
  const addComponent = (item) => {
    components.value.push(item)
  }


  const removeComponent = (itemName) => {
    const index = components.value.findIndex(
      item => item.name === itemName
    )
    if (index !== -1) {
      components.value.splice(index, 1)
    }
  }

  const checkout = () => {
    alert('Compra realitzada!!!')
    components.value = []
  }

  return {components, totalPrice, groupedByType, addComponent, removeComponent, checkout}
})
