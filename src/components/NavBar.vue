<script setup>
import { useUserSessionStore } from '@/stores/useUserSessionStore';

const userSession = useUserSessionStore();

</script>

<template>
  <header>
    <div>
      <h1>TechBuilds</h1>
    </div>

    <div>
    <p>Hola, <span @click="userSession.visitGitHub">{{ userSession.userName }}</span></p>
    </div>
  </header>
</template>

<style>

header{
    background-color: black;
}
h1{
    color:#5694DB;
}
p{
  color: white;
}

</style>