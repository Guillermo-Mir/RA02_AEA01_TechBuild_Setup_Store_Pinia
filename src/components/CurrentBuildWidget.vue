<script setup>
//Un component que mostri el resum 
// del PC i obrir un modal amb els 
// components agrupats per tipus.
import { useBuildStore } from '@/stores/useBuildStore';

const BuildStore = useBuildStore()

</script>

<template>
    <ul v-for="product in BuildStore" :key="product" :product="product" @clear="BuildStore.removeComponent(product)">
        <li>
            <h3>{{ product.name }} -- {{ product.price }}</h3>
        </li>
    </ul>
    <div>Total: {{ BuildStore.totalPrice }}€</div>
</template>