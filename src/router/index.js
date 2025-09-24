import { createRouter, createWebHistory } from 'vue-router';
import { getAuth, onAuthStateChanged } from "firebase/auth";

import Home from '../components/Home.vue';
import AboutMe from '../components/AboutMe.vue';
import Services from '../components/Services.vue';
import Projects from '../components/Projects.vue';
import Contact from '../components/Contact.vue';
import LetsTalk from '../components/LetsTalk.vue';
import Signup from '../components/Signup.vue';
import Login from '../components/Login.vue';
import dashbord from '../components/DashbordBo.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'AboutMe', component: AboutMe },
  { path: '/services', name: 'Services', component: Services },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/letstalk', name: 'LetsTalk', component: LetsTalk },
  { path: '/signup', component: Signup },
  { path: '/login', component: Login },
  { path: "/dashbord", component: dashbord, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
const auth = getAuth();

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const currentUser = auth.currentUser;

  if (requiresAuth && !currentUser) {
    next("/");
  } else {
    next();
  }
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is logged in:", user);
    // You can save user info in your Vue state management here if needed
  } else {
    console.log("User is logged out");
  }
});

export default router;
