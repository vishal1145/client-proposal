<template>
  <div>
    <Login v-if="!isAuthenticated" />
    <div v-else>
      <Navbar />
      <Dashboard />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Dashboard from './components/Dashboard.vue';
import Login from './components/Login.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Dashboard,
    Login
  },
  data() {
    return {
      isAuthenticated: false
    }
  },
  created() {
    // Check authentication status when app loads
    this.isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
  },
  watch: {
    // Watch for route changes to check authentication
    '$route': {
      handler() {
        this.isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
      },
      immediate: true
    }
  }
}
</script>

<style></style>
