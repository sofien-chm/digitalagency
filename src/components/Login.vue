<template>
  <form @submit.prevent="handleLogin" class="auth-form">
    <h2>Login</h2>
    <input v-model="email" type="email" placeholder="Email" required />
    <input v-model="password" type="password" placeholder="Password" required />
    <button type="submit">Login</button>
    <p v-if="error" class="error">{{ error }}</p>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const email = ref('');
const password = ref('');
const error = ref('');

async function handleLogin() {
  error.value = '';
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
    console.log('Login success:', userCredential.user);
    // Redirect or reset form here if needed
  } catch (err) {
    error.value = err.message;
  }
}
</script>

<style scoped>
.auth-form {
  max-width: 400px;
  margin: 3rem auto;
  padding: 2rem 2.5rem;
  background-color: #1c2331;
  border-radius: 1rem;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
input {
  padding: 0.8rem;
  border-radius: 0.4rem;
  border: none;
  outline: none;
}
button {
  background-color: #53cefa;
  padding: 0.8rem;
  font-weight: bold;
  border-radius: 0.6rem;
  cursor: pointer;
  border: none;
}
.error {
  color: #ff4e42;
  font-weight: bold;
}
</style>
