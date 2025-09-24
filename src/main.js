import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import './assets/style.scss'; // Import global styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.scss'; // your custom styles
import 'bootstrap-icons/font/bootstrap-icons.css';

let app;
onAuthStateChanged(auth, () => {
  if (!app) {
    app = createApp(App).use(router).mount('#app');
  }
});