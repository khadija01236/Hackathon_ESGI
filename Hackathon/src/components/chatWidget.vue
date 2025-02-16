<template>
  <div class="chat-container">
    <div class="chat-header" @click="toggleChat">
      🤖 Chatbot
    </div>

    <div v-if="isOpen" class="chat-box">
      <div class="chat-messages">
        <div
          v-for="(message, index) in messages"
          :key="index"
          :class="['message', message.isUser ? 'user' : 'bot']"
        >
          {{ message.text }}
        </div>
      </div>

      <!-- Zone de saisie -->
      <div class="chat-input">
        <input v-model="userInput" v-if="!file" type="text" placeholder="Écrivez un message..." @keyup.enter="sendMessage" />
        
        <!-- Bouton pour ajouter un fichier -->
        <button @click="triggerFileUpload" class="file-upload-btn">➕</button>
        <input type="file" ref="fileInput" @change="handleFileUpload" style="display: none" />

        <!-- Affichage du fichier sélectionné -->
        <span v-if="file" class="file-info">
          📎 {{ file.name }}
          <button @click="removeFile" class="remove-file">✖</button>
        </span>

        <!-- Bouton envoyer -->
        <button @click="sendMessage">📤</button>
      </div>
    </div>
  </div>
</template>

<script>
import { getGeminiResponse } from "../services/chatService.js";

export default {
  data() {
    return {
      isOpen: false,
      userInput: "",
      messages: [],
      file: null,
    };
  },
  methods: {
    toggleChat() {
      this.isOpen = !this.isOpen;
    },
    triggerFileUpload() {
      this.$refs.fileInput.click();
    },
    handleFileUpload(event) {
      this.file = event.target.files[0];
      this.userInput = ""; // Efface le texte pour éviter d'envoyer les deux en même temps
    },
    removeFile() {
      this.file = null;
    },
    async sendMessage() {
      if (!this.userInput && !this.file) return;

      this.messages.push({ text: this.userInput || `📎 ${this.file.name}`, isUser: true });

      const botResponse = await getGeminiResponse(this.userInput, this.file);
      this.messages.push({ text: botResponse, isUser: false });

      this.userInput = "";
      this.file = null;
    },
  },
};
</script>

<style scoped>
/* Conteneur du chatbot */
.chat-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 350px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  font-family: Arial, sans-serif;
}

/* En-tête du chatbot */
.chat-header {
  background: #007bff;
  color: white;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
}

/* Zone des messages */
.chat-box {
  display: flex;
  flex-direction: column;
  height: 400px;
  padding: 10px;
}

/* Messages */
.chat-messages {
  flex-grow: 1;
  overflow-y: auto;
  padding: 10px;
  background: #f5f5f5;
  border-bottom: 1px solid #ddd;
}

.message {
  padding: 8px 12px;
  margin: 5px;
  border-radius: 5px;
  max-width: 75%;
}

.user {
  background: #007bff;
  color: white;
  align-self: flex-end;
}

.bot {
  background: #e0e0e0;
  color: black;
  align-self: flex-start;
}

/* Zone d'entrée */
.chat-input {
  display: flex;
  align-items: center;
  padding: 10px;
  background: white;
}

.chat-input input[type="text"] {
  flex-grow: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.file-upload-btn {
  background: #28a745;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  margin: 0 5px;
  cursor: pointer;
}

.file-info {
  font-size: 14px;
  background: #ffc107;
  padding: 5px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-right: 5px;
}

.remove-file {
  background: red;
  color: white;
  border: none;
  margin-left: 5px;
  padding: 2px 5px;
  cursor: pointer;
  border-radius: 50%;
}

.chat-input button {
  background: #007bff;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
