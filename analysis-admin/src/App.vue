<template>
  <div id="app">
    <!-- Show Navbar only when authenticated -->
    <Navbar v-if="isAuthenticated" />
    <router-view @auth-change="handleAuthChange"></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  },
  data() {
    return {
      isAuthenticated: false
    }
  },
  methods: {
    handleAuthChange(value) {
      this.isAuthenticated = value;
    }
  },
  created() {
    // Check authentication status when app loads
    this.isAuthenticated = !!localStorage.getItem('token');
  },
  // Add watch for route changes to update authentication status
  watch: {
    '$route'() {
      this.isAuthenticated = !!localStorage.getItem('token');
    }
  }
}
</script>

<style></style>
