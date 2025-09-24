import { createRouter, createWebHistory } from 'vue-router';

import Home from '../components/Home.vue';
import AboutMe from '../components/AboutMe.vue';
import Services from '../components/Services.vue';
import Projects from '../components/Projects.vue';
import Contact from '../components/Contact.vue';
import LetsTalk from '../components/LetsTalk.vue';
import Signup from '../components/Signup.vue';
import Login from '../components/Login.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'AboutMe', component: AboutMe },
  { path: '/services', name: 'Services', component: Services },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/letstalk', name: 'LetsTalk', component: LetsTalk },
  { path: '/signup', component: Signup },
  { path: '/login', component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
