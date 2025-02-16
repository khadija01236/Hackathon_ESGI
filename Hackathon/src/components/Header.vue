<template>
  <header class="header">
    <div class="logo">
      <h1 class="EDU">EDU Bot</h1>
    </div>

    <nav class="nav">
      <router-link to="/" class="nav-link">🏠 Accueil</router-link>
      <router-link to="/courses" class="nav-link">📚 Cours</router-link>
      <router-link to="/profile" class="nav-link">👤 Profil</router-link>
    </nav>
  </header>
</template>

<style scoped>

.header {
  display: flex;
  justify-content: space-between; /* Pour séparer le logo et les liens */
  align-items: center;
  padding: 15px 40px;
  background: linear-gradient(135deg, #007bff, #00c6ff);
  color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.logo {
  display: flex;
  align-items: center;
  gap: 15px;
}

.logo-img {
  width: 50px;
  height: auto;
}

h1 {
  font-size: 1.8rem;
  margin: 0;
}

.nav {
  display: flex;
  gap: 30px; /* Espace entre les liens */
  flex-grow: 1; /* Permet d'étendre la nav sur tout l'espace */
  justify-content: center; /* Centre les liens */
}

.nav-link {
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  transition: 0.3s;
}

.nav-link:hover {
  transform: scale(1.1);
  text-decoration: underline;
}
.EDU{
  color: red;
}
</style>
