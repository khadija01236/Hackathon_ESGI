import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Courses from '../pages/Courses.vue';
import Profile from '../pages/Profile.vue'; 
import Mathematiques from '../pages/Mathematiques.vue';
import Francais from '../pages/Francais.vue';
import Physique from '../pages/Physique.vue';
import Histoire from '../pages/Histoire.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/courses', component: Courses },
  { path: '/profile', component: Profile },
  { path: '/mathematiques', component: Mathematiques },
  { path: '/francais', component: Francais },
  { path: '/physique', component: Physique },
  { path: '/histoire', component: Histoire },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
