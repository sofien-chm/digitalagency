<template>
  <router-view />

  <form @submit.prevent="handleSignup" class="auth-form">
    <h2>Sign Up</h2>
    <input v-model="email" type="email" placeholder="Email" required />
    <input v-model="password" type="password" placeholder="Password" required minlength="6" />
    <button type="submit">Create Account</button>
    <p v-if="error" class="error">{{ error }}</p>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // your firebase config

const email = ref('');
const password = ref('');
const error = ref('');

async function handleSignup() {
  error.value = '';
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    console.log('Signup success:', userCredential.user);
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
