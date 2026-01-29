<script setup>
import { useUserSessionStore } from '@/stores/useUserSessionStore';

const userSession = useUserSessionStore();

</script>

<template>
  <header class="navbar">
    <div class="logo-container">
      <h1 class="logo">Tech<span>Builds</span></h1>
    </div>

    <div class="user-info">
      <p>Hola, 
        <span class="user-link" @click="userSession.visitGitHub">
          {{ userSession.userName }}
        </span>
      </p>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 2rem;
  background-color: #1a1a1a; 
  color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: -1px;
  color: #5694DB;
}

.logo span {
  color: white;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.user-info p {
  margin: 0;
  font-size: 0.95rem;
  font-weight: 400;
  color: #ccc;
}

.user-link {
  color: #5694DB;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  transition: color 0.2s;
}

.user-link:hover {
  color: white;
  text-decoration: underline;
}

.user-avatar {
  width: 35px;
  height: 35px;
  background-color: #5694DB;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 0.9rem;
  border: 2px solid rgba(255, 255, 255, 0.1);
}
</style>