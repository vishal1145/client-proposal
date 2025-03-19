<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
    <div class="max-w-2xl w-full text-center space-y-12">
      <!-- 404 Text with Animation -->
      <div class="relative">
        <!-- Background Numbers with Animation -->
        <div class="absolute inset-0 flex items-center justify-center opacity-5">
          <div class="text-[250px] font-bold tracking-widest text-gray-900 animate-pulse">
            404
          </div>
        </div>

        <!-- Main Content -->
        <div class="relative z-10 py-16">
          <!-- Simple 404 Illustration -->
          <div class="flex justify-center mb-8">
            <div class="w-32 h-32 rounded-full bg-indigo-100 flex items-center justify-center">
              <span class="text-6xl text-indigo-600">!</span>
            </div>
          </div>

          <!-- Error Message -->
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p class="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <router-link to="/"
              class="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-all duration-200 transform hover:scale-105">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Return Home
            </router-link>
            <button @click="goBack"
              class="inline-flex items-center px-6 py-3 rounded-lg border-2 border-indigo-600 text-indigo-600 font-medium hover:bg-indigo-50 transition-all duration-200 transform hover:scale-105">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
              </svg>
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
/* Gradient Animation */
.bg-gradient-to-br {
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

/* Scale animation for buttons */
.transform {
  transition: transform 0.2s;
}

.hover\:scale-105:hover {
  transform: scale(1.05);
}
</style>