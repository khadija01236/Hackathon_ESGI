<template>
  <div class="app-container">
    <Header />
    <router-view />
    <ChatWidget /> 
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import ChatWidget from './components/ChatWidget.vue';
import Footer from "./components/Footer.vue";

</script>

<style>
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background: #f8f9fa;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

h1 {
  color: #007bff;
}

p {
  color: #555;
}
</style>
