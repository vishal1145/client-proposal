<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
      <!-- Logo Section -->
      <div class="text-center mb-8">
        <img src="https://algofolks.com/images/logo2.webp" alt="Logo" class="h-12 mx-auto mb-4" />
        <h2 class="text-3xl font-bold text-gray-800">Welcome Back</h2>
        <p class="text-gray-600">Please sign in to your account</p>
      </div>

      <!-- Login Form -->
      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
          <input type="email" v-model="email"
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="Enter your email" required />
        </div>

        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input type="password" v-model="password"
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="Enter your password" required />
        </div>
        <!-- Show error message -->
        <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
        
        <button type="submit" :disabled="isSaving"
          class="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300">
          <span v-if="isSaving">Signing in...</span>
          <span v-else>Sign In</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Login-component',
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
      isSaving: false,
    }
  },
  methods: {
    async handleLogin() {
      if (!this.email.trim() || !this.password.trim()) return;

      this.isSaving = true; // Start loader
      try {
        const response = await axios.post('https://analysis-be.algofolks.com/api/auth/login', {
          email: this.email,
          password: this.password,
        });

        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
          this.$router.push('/reviews');
        } else {
          this.errorMessage = 'Login failed: No token received';
        }
      } catch (error) {
        console.error('Login error:', error);
        this.errorMessage = error.response?.data?.message || 'An error occurred during login';
      } finally {
        this.isSaving = false; // Stop loader
      }
    },
  },
  // Add created hook to check if user is already logged in
  created() {
    const token = localStorage.getItem('token');
    if (token) {
      this.$router.replace('/dashboard');
    }
  }
}
</script>