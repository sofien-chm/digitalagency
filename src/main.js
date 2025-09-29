import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { createI18n } from 'vue-i18n';

import './assets/style.scss'; // Import global styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import translation files
import en from './locales/en.json';
import fr from './locales/fr.json';
import it from './locales/it.json';



const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en, fr, it }
})


const app = createApp(App)
  .use(router)
  .use(i18n);

app.mount('#app');


// let app;
// onAuthStateChanged(auth, () => {
//   if (!app) {
//     app = createApp(App)
//       .use(router)
//       .use(i18n)    // Use i18n instance
//       .mount('#app');
//   }
// });
