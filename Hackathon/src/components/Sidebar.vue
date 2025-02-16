<template>
  <div class="sidebar">
    <h2>📚 Cours disponibles</h2>
    <router-link to="/courses/mathematiques" class="sidebar-item">Mathématiques</router-link>
    <router-link to="/courses/francais" class="sidebar-item">Français</router-link>
    <router-link to="/courses/physique" class="sidebar-item">Physique</router-link>
    <router-link to="/courses/histoire" class="sidebar-item">Histoire</router-link>
  </div>
</template>

<style scoped>
.sidebar {
  width: 250px;
  background: #f8f9fa;
  padding: 20px;
  border-right: 2px solid #ccc;
}
.sidebar-item {
  display: block;
  text-decoration: none;
  padding: 10px;
  margin-bottom: 5px;
  background: white;
  border-radius: 5px;
  color: black;
}
.sidebar-item:hover {
  background: #007bff;
  color: white;
}
</style>
