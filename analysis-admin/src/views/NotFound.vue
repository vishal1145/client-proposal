<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-lg w-full space-y-8 text-center">
      <!-- 404 Text and Illustration -->
      <div class="relative">
        <h1 class="text-9xl font-bold text-gray-200">404</h1>
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="space-y-4">
            <h2 class="text-4xl font-extrabold text-gray-900 tracking-tight">
              Oops! Page not found
            </h2>
            <p class="text-lg text-gray-600">
              The page you are looking for might have been removed or is temporarily unavailable.
            </p>
          </div>
        </div>
      </div>

      <!-- Animated SVG -->
      <div class="flex justify-center my-8">
        <svg class="w-64 h-64" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
          <!-- Background Circle -->
          <circle cx="250" cy="250" r="200" fill="#f3f4f6" />
          
          <!-- Animated Search Icon -->
          <g class="search-animation">
            <circle cx="220" cy="220" r="75" fill="none" stroke="#4b5563" stroke-width="20" />
            <line x1="270" y1="270" x2="360" y2="360" stroke="#4b5563" stroke-width="20" stroke-linecap="round" />
          </g>
          
          <!-- Question Marks -->
          <g class="question-marks">
            <text x="150" y="200" font-size="40" fill="#9ca3af" class="question-mark-1">?</text>
            <text x="320" y="180" font-size="30" fill="#9ca3af" class="question-mark-2">?</text>
            <text x="280" y="280" font-size="35" fill="#9ca3af" class="question-mark-3">?</text>
          </g>
        </svg>
      </div>

      <!-- Action Buttons -->
      <div class="flex justify-center space-x-4">
        <router-link to="/"
          class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200">
          <svg class="mr-2 -ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Back to Home
        </router-link>
        <button @click="goBack"
          class="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200">
          <svg class="mr-2 -ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
          </svg>
          Go Back
        </button>
      </div>

      <!-- Help Text -->
      <div class="mt-6">
        <p class="text-sm text-gray-500">
          Need help? Please
          <a href="mailto:support@example.com" class="font-medium text-blue-600 hover:text-blue-500 transition-all duration-200">
            contact our support team
          </a>
        </p>
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
.search-animation {
  animation: bounce 2s infinite;
}

.question-mark-1 {
  animation: float 3s infinite;
}

.question-mark-2 {
  animation: float 3s infinite 0.5s;
}

.question-mark-3 {
  animation: float 3s infinite 1s;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.5;
  }
  50% {
    transform: translateY(-15px) rotate(10deg);
    opacity: 1;
  }
}
</style> 