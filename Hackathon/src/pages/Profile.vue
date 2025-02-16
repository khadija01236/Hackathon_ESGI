<template>
  <div class="profile-container">
    <h1 class="profile-title">👤 Mon Profil</h1>

    <div class="profile-card">
      <div class="profile-header">
        <div class="profile-image-container">
          <img :src="user.avatar" alt="Photo de profil" class="profile-image" />
          <label for="avatarUpload" class="edit-avatar">📷</label>
          <input type="file" id="avatarUpload" @change="updateAvatar" accept="image/*" />
        </div>
        <h2>{{ user.name }}</h2>
        <p class="profile-email">{{ user.email }}</p>
      </div>

      <div class="profile-body">
        <form @submit.prevent="updateProfile">
          <div class="form-group">
            <label>Nom :</label>
            <input type="text" v-model="user.name" required />
          </div>

          <div class="form-group">
            <label>Email :</label>
            <input type="email" v-model="user.email" disabled />
          </div>

          <button type="submit">💾 Sauvegarder</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const user = ref({
  name: 'Marie Konte',
  email: 'marie.konte@email.com',
  avatar: 'https://i.pravatar.cc/180?img=4' // Image de profil par défaut
});

const updateAvatar = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      user.value.avatar = e.target.result; // Met à jour l'image avec l'URL en base64
    };
    reader.readAsDataURL(file);
  }
};

const updateProfile = () => {
  alert('✅ Profil mis à jour avec succès !');
};
</script>

<style scoped>
/* 🌟 CONTENEUR PRINCIPAL */
.profile-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #eef2f3, #c3cfe2);
}

/* 📝 TITRE */
.profile-title {
  font-size: 3rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

/* 🏆 CARTE PROFIL */
.profile-card {
  background: white;
  padding: 35px;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 400px;
  transition: transform 0.3s ease-in-out;
}

.profile-card:hover {
  transform: scale(1.03);
}
 
/* 📷 IMAGE DE PROFIL */
.profile-image-container {
  position: relative;
  display: inline-block;
}

.profile-image {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border: 4px solid #007bff;
  object-fit: cover;
}

/* 📂 INPUT POUR CHANGER L'IMAGE */
#avatarUpload {
  display: none;
}

.edit-avatar {
  position: absolute;
  bottom: 5px;
  right: 5px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: 0.3s;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.edit-avatar:hover {
  background: #0056b3;
}

/* ✍️ INFORMATIONS UTILISATEUR */
h2 {
  margin: 15px 0 5px;
  font-size: 1.8rem;
  color: #333;
}

.profile-email {
  color: #555;
  font-size: 1rem;
  margin-bottom: 20px;
}

/* 📋 FORMULAIRE */
.profile-body {
  margin-top: 20px;
}

.form-group {
  text-align: left;
  margin-bottom: 15px;
}

label {
  font-weight: bold;
  display: block;
  color: #444;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 12px;
  border: 2px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}

input:focus {
  border-color: #007bff;
  outline: none;
}

/* 🔘 BOUTON */
button {
  margin-top: 20px;
  padding: 12px;
  font-size: 1rem;
  border: none;
  background: #007bff;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  width: 100%;
}

button:hover {
  background: #0056b3;
  transform: scale(1.05);
}
</style>
