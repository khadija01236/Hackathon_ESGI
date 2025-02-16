<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Liens de navigation -->
      <nav class="footer-links">
        <router-link to="/">
          <font-awesome-icon :icon="['fas', 'home']" /> Accueil
        </router-link>
        <router-link to="/courses">
          <font-awesome-icon :icon="['fas', 'book']" /> Cours
        </router-link>
        <router-link to="/profile">
          <font-awesome-icon :icon="['fas', 'user']" /> Profil
        </router-link>
       
      </nav>

      <!-- Liens sociaux -->
      <div class="footer-social">
        <a href="https://twitter.com" target="_blank">
          <font-awesome-icon :icon="['fab', 'twitter']" /> Twitter
        </a>
        <a href="https://linkedin.com" target="_blank">
          <font-awesome-icon :icon="['fab', 'linkedin']" /> LinkedIn
        </a>
        <a href="https://github.com" target="_blank">
          <font-awesome-icon :icon="['fab', 'github']" /> GitHub
        </a>
      </div>

      <!-- Copyright -->
      <p class="footer-text">© 2025 EDU Bot. Tous droits réservés.</p>
    </div>
  </footer>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>

<style scoped>
.footer {
  background: linear-gradient(90deg, #00c6ff, #007bff); /* Dégradé bleu plus clair */
  color: white;
  padding: 20px 0;
  text-align: center;
  margin-top: 50px;
  border-top: 4px solid #fff;
}

.footer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.footer-links {
  display: flex;
  gap: 20px;
  font-size: 16px;
}

.footer-links a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;
  display: flex;
  align-items: center;
  gap: 5px;
}

.footer-links a:hover {
  color: #ffdd57;
}

.footer-social {
  display: flex;
  gap: 15px;
  margin-top: 10px;
}

.footer-social a {
  color: white;
  text-decoration: none;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.footer-social a:hover {
  color: #ffdd57;
}

.footer-text {
  font-size: 14px;
  opacity: 0.9;
  margin-top: 10px;
}
</style>
