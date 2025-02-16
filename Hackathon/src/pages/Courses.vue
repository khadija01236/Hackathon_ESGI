<template>
  <div class="courses-container">
    <h1>📚 Tous les Cours</h1>

    <!-- Navigation vers les différentes matières -->
    <div class="nav-courses">
      <router-link to="/mathematiques">📘 Mathématiques</router-link>
      <router-link to="/francais">📖 Français</router-link>
      <router-link to="/physique">🔬 Physique</router-link>
      <router-link to="/histoire">🏛 Histoire</router-link>
    </div>

    <!-- Formulaire d'ajout de cours -->
    <h2>➕ Ajouter un nouveau cours</h2>
    <form @submit.prevent="ajouterCours" class="form-ajout">
      <input v-model="nouveauCours.titre" type="text" placeholder="Titre du cours" required />
      <textarea v-model="nouveauCours.contenu" placeholder="Contenu du cours" required></textarea>
      <select v-model="nouveauCours.matiere" required>
        <option value="">Sélectionner une matière</option>
        <option value="Mathematiques">Mathématiques</option>
        <option value="Francais">Français</option>
        <option value="Physique">Physique</option>
        <option value="Histoire">Histoire</option>
      </select>
      <button type="submit">➕ Ajouter</button>
    </form>

    <!-- Liste des cours ajoutés -->
    <div v-if="cours.length" class="cours-list">
      <h2>📖 Cours ajoutés</h2>
      <div v-for="(coursItem, index) in cours" :key="index" class="cours-item">
        <h3>{{ coursItem.titre }} ({{ coursItem.matiere }})</h3>
        <p>{{ coursItem.contenu }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nouveauCours: {
        titre: "",
        contenu: "",
        matiere: "",
      },
      cours: [],
    };
  },
  methods: {
    ajouterCours() {
      if (this.nouveauCours.titre && this.nouveauCours.contenu && this.nouveauCours.matiere) {
        this.cours.push({ ...this.nouveauCours });
        this.nouveauCours = { titre: "", contenu: "", matiere: "" };
      }
    },
  },
};
</script>

<style scoped>
.courses-container {
  max-width: 900px;
  margin: auto;
  padding: 20px;
  text-align: center;
}

.nav-courses {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  
}

.nav-courses a {
  text-decoration: none;
  color: white;
  background: #007bff;
  padding: 10px;
  border-radius: 5px;
}

.form-ajout {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

input, textarea, select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background: #007bff;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background: #0056b3;
}

.cours-list {
  margin-top: 20px;
  text-align: left;
}

.cours-item {
  background: #f8f9fa;
  padding: 10px;
  border-left: 5px solid #007bff;
  margin-bottom: 10px;
  border-radius: 5px;
}
</style>
