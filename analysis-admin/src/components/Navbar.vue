<template>
  <nav class="bg-gray-100 border-b border-gray-300">
    <div class="width-full py-4 px-4">
      <div class="flex justify-between items-center h-8">
        <!-- Logo and Title Section -->
        <div class="flex items-center space-x-0">
          <router-link to="/" class="flex items-center hover:opacity-80 transition duration-300">
            <img src="https://algofolks.com/images/logo2.webp" alt="Analysis Logo" class="h-10 w-auto mr-3" />
          </router-link>

          <!-- Navigation Tabs -->
          <div class="flex space-x-6">
            <router-link to="/dashboard" class="px-3 py-2 text-sm font-medium transition-colors duration-200"
              :class="[$route.path === '/dashboard' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600']">
              Dashboard
            </router-link>
            <router-link to="/reviews" class="px-3 py-2 text-sm font-medium transition-colors duration-200"
              :class="[$route.path === '/reviews' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600']">
              Reviews
            </router-link>
            <router-link to="/settings" class="px-3 py-2 text-sm font-medium transition-colors duration-200"
              :class="[$route.path === '/settings' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600']">
              Settings
            </router-link>
          </div>
        </div>

        <!-- Logout Button -->
        <div class="flex items-center space-x-4">
          <button @click="handleLogout"
            class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300">
            Logout
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar-component',
  methods: {
    handleLogout() {
      localStorage.removeItem('token');
      this.$router.push('/login');
    },
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ffffff;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
}

.navbar-brand img {
  height: 40px;
}

.navbar-menu {
  display: flex;
  gap: 2rem;
}

.nav-item {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-item:hover {
  background-color: #f5f5f5;
}

.nav-item.router-link-active {
  color: #4CAF50;
}

.navbar-end {
  display: flex;
  align-items: center;
}

.user-menu {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.profile-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  background: none;
  cursor: pointer;
}

.logout-button {
  padding: 0.5rem 1rem;
  border: none;
  background-color: #f44336;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.logout-button:hover {
  background-color: #d32f2f;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    padding: 1rem;
  }

  .navbar-menu {
    flex-direction: column;
    width: 100%;
    gap: 1rem;
    margin: 1rem 0;
  }

  .nav-item {
    text-align: center;
  }

  .user-menu {
    width: 100%;
    justify-content: center;
  }
}
</style>