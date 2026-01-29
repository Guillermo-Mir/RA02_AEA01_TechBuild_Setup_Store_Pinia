<script setup>
const props = defineProps({
  component: Object,
});

defineEmits(["addComponent"]);
</script>

<template>
  <li class="product-card">
    <div class="image-container">
      <img :src="`/img/${component.image}`" :alt="component.name" />
    </div>

    <div class="info-container">
        <span class="category">{{ component.type }}</span>
        <h3>{{ component.name }}</h3>
        <p class="price">{{ component.price }}€</p>
      
        <button class="add-button" @click="$emit('addComponent', component)" >
            Afegir al Muntatge
        </button>
    </div>
  </li>
</template>

<style scoped>
.product-card {
  list-style: none;
  width: 240px; 
  flex-shrink: 0;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid #eee;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.image-container {
  background-color: #f8f9fa;
  border-radius: 8px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  max-width: 100%;
  height: 80px;
  object-fit: contain;
}

.info-container {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.category {
  font-size: 0.7rem;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: bold;
}

h3 {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.price {
  margin: 0.5rem 0;
  font-size: 1.2rem;
  font-weight: 800;
  color: #5694DB;
}

.add-button {
  margin-top: auto; 
  padding: 0.6rem;
  background-color: #5694DB;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.add-button:hover {
  background-color: #2d3436;
}
</style>