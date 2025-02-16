import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js'; // Vérifie que c'est bien écrit ici
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faBook, faUser, faRobot } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faHome, faBook, faUser, faRobot, faTwitter, faLinkedin, faGithub);
const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.mount('#app');
