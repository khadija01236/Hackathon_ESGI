<template>
  <div class="home-container">
    <!-- Section principale -->
    <section class="hero">
      <div class="hero-content">
        <h1>Bienvenue sur <span class="highlight">EDU Bot</span></h1>
        <p>Améliorez vos compétences avec un assistant intelligent qui vous accompagne dans votre apprentissage.</p>
        <button @click="goToCourses">🚀 Commencer l'aventure</button>
      </div>
      
      <!-- Image temporairement commentée -->
      <!-- <img src="/learning.png" alt="Apprentissage" class="hero-image" /> -->
    </section>

    <!-- Section des fonctionnalités -->
    <section class="features">
      <h2>🌟 Pourquoi choisir EDU Bot ?</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <h3>📖 Cours interactifs</h3>
          <p>Des explications claires et adaptées à votre niveau.</p>
        </div>
        <div class="feature-card">
          <h3>🤖 Chatbot intelligent</h3>
          <p>Posez vos questions et obtenez des réponses précises en temps réel.</p>
        </div>
        <div class="feature-card">
          <h3>📝 Exercices & Quiz</h3>
          <p>Testez vos connaissances avec des exercices adaptés.</p>
        </div>
      </div>
    </section>

    <!-- Section témoignages -->
    <section class="testimonials">
      <h2>✨ Ce que disent les étudiants</h2>
      <div class="testimonial">
        <p>“EDU Bot m'a énormément aidé à comprendre mes cours de maths. C'est comme avoir un professeur disponible 24h/24 !”</p>
        <span>- Marie, éléve en classe de 3éme College des Ormeaux, Rennes</span>
      </div>
      
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToCourses = () => {
  router.push('/courses');
};
</script>

<style scoped>
/* Styles généraux */
.home-container {
  font-family: 'Arial', sans-serif;
  background: linear-gradient(180deg, #e3f2fd, #ffffff);
  color: #333;
  padding: 40px 20px;
  text-align: center;
}

/* Section hero */
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 20px;
  background: linear-gradient(135deg,rgb(113, 149, 188),rgb(37, 185, 226));
  border-radius: 20px;
  color: white;
  margin-bottom: 50px;
}

.hero-content {
  max-width: 500px;
}

.hero h1 {
  font-size: 2.8rem;
  margin-bottom: 10px;
}

.highlight {
  color: #ffdd57;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.hero button {
  padding: 12px 20px;
  font-size: 1.2rem;
  background: white;
  color: #007bff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

.hero button:hover {
  background: #e0e0e0;
}

/* Section fonctionnalités */
.features {
  padding: 40px 20px;
}

.feature-grid {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.feature-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 280px;
  text-align: left;
}

.feature-card h3 {
  color: #007bff;
}

/* Témoignages */
.testimonials {
  background: #f8f9fa;
  padding: 40px 20px;
  border-radius: 15px;
  margin-top: 50px;
}

.testimonial {
  max-width: 500px;
  margin: 0 auto;
  font-style: italic;
}

.testimonial span {
  display: block;
  margin-top: 10px;
  font-weight: bold;
  color: #007bff;
}
</style>
