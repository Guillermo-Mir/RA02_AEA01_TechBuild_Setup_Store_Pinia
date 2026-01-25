<script setup>

const props = defineProps({
  component: Object,
});

</script>

<template>
  <li>
    <div>
      <img src="" alt="hardware" />
    </div>

    <div>
        <h3>{{ component.name }}</h3>
        <span>{{ component.type }}</span>
        <p class="preu">{{ component.price }}€</p>
      
        <button>
            Afegir al Muntatge
        </button>
    </div>
  </li>
</template>

<style scoped>
    img{
        width: 100px;
        height: 100px;
    }

</style>