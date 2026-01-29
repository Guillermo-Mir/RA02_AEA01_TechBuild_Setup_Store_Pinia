<script setup>
//Un component que mostri el resum 
// del PC i obrir un modal amb els 
// components agrupats per tipus.
import { useBuildStore } from '@/stores/useBuildStore';

const BuildStore = useBuildStore()

</script>

<template>

    <div v-if="BuildStore.components.length === 0">
      El carret està buit.
    </div>

    <div v-for="(products, type) in BuildStore.groupedByType" :key="products">
        <ul>
            <h2>{{ type }}</h2>
            <li v-for="product in products" :key="product">
                <h3>{{ product.name }} -- {{ product.price }}</h3>
                <button @click="BuildStore.removeComponent(product.name)">Eliminar</button>
            </li>
        </ul>
     </div>
    <div v-if="BuildStore.components.length > 0"></div>
    <div>Total: {{ BuildStore.totalPrice }}€</div>
</template>