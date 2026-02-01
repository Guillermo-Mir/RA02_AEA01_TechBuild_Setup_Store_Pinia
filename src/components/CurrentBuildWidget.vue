<script setup>
import { useBuildStore } from '@/stores/useBuildStore'

const BuildStore = useBuildStore()
</script>

<template>
  <div class="cart-container">
    <h2 class="cart-title">El teu Muntatge</h2>

    <div v-if="BuildStore.isEmpty" class="empty-cart">
      <p>El carret està buit. Comença a afegir components!</p>
    </div>

    <div v-else>
      <div v-for="(productsByName, type) in BuildStore.groupedByType" :key="type" class="category-section">
        <h3 class="category-title">{{ type }}</h3>

        <ul class="product-list">
          <li v-for="(items, name) in productsByName" :key="name" class="product-item">
            <div class="product-info">
              <span class="product-name">
                {{ name }}
                <strong v-if="items.length > 1">
                  x{{ items.length }}
                </strong>
              </span>

              <span class="product-price">
                {{ items[0].price * items.length }}€
              </span>
            </div>

            <button class="btn-remove" @click="BuildStore.removeComponent(name)" title="Eliminar producte">
              <span class="icon"></span> Eliminar
            </button>
          </li>
        </ul>
      </div>

      <div class="cart-footer">
        <div class="total-section">
          <span>Total del pressupost:</span>
          <span class="total-price">
            {{ BuildStore.totalPrice }}€
          </span>
        </div>

        <button class="btn-checkout" @click="BuildStore.checkout">
          Finalitzar Muntatge
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart-container {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  border: 1px solid #eef0f2;
  max-width: 500px;
  margin: 2rem auto;
}

.cart-title {
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  color: #2d3436;
  border-bottom: 2px solid #f1f1f1;
  padding-bottom: 0.5rem;
}

.empty-cart {
  text-align: center;
  padding: 2rem;
  color: #b2bec3;
  font-style: italic;
}

.category-section {
  margin-bottom: 1.5rem;
}

.category-title {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #636e72;
  margin-bottom: 0.75rem;
  background-color: #f8f9fa;
  padding: 4px 10px;
  border-left: 4px solid #5694DB;
  border-radius: 4px;
}

.product-list {
  padding: 0;
  margin: 0;
  list-style: none;
}

.product-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f1f1f1;
  transition: all 0.2s;
}

.product-item:hover {
  background-color: #fafafa;
}

.product-info {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.product-name {
  font-weight: 500;
  color: #2d3436;
  font-size: 0.95rem;
}

.product-price {
  color: #5694DB;
  font-weight: 700;
  font-size: 0.9rem;
}

.btn-remove {
  background-color: #fff0f0;
  color: #d63031;
  border: 1px solid #fab1a0;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.2s;
}

.btn-remove:hover {
  background-color: #d63031;
  color: white;
}

.cart-footer {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 2px solid #2d3436;
}

.total-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.total-price {
  font-size: 1.5rem;
  color: #2d3436;
}

.btn-checkout {
  width: 100%;
  padding: 1rem;
  background-color: #00b894;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;
}

.btn-checkout:hover {
  background-color: #00947a;
  transform: translateY(-2px);
}

.btn-checkout:active {
  transform: translateY(0);
}
</style>
