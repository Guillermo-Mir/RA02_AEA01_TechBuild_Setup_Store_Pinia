import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { groupBy } from 'lodash'

export const useBuildStore = defineStore('BuildStore', () => {
    // STATE
    const components = ref([])

    // GETTERS
    const count = computed(() => components.value.length)

    const isEmpty = computed(() => count.value === 0)

    const totalPrice = computed(() =>
        components.value.reduce((acc, item) => acc + item.price, 0)
    )

    const groupedByType = computed(() => {
        const byType = groupBy(components.value, item => item.type)
        const result = {}

        Object.keys(byType).sort().forEach(type => {
            const byName = groupBy(byType[type], item => item.name)
            result[type] = byName
        })

        return result
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

    return {components, count, isEmpty, totalPrice, groupedByType, addComponent, removeComponent, checkout}
})
