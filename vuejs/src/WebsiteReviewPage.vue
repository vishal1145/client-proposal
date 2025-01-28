<template>
  <div class="max-w-3xl mx-auto p-4 mt-12">
    <h1 class="text-2xl font-bold mb-4 text-center">Website Review</h1>
    <textarea
      v-model="query"
      placeholder="Type your question here..."
      rows="5"
      class="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    ></textarea>
    <button
      @click="askQuestion"
      :disabled="loading"
      class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
    >
      Review
    </button>

    <div v-if="loading" class="mt-4 text-blue-500 font-medium">Processing your query...</div>
    <div v-if="error" class="mt-4 text-red-500 font-bold">
      {{ error }}
    </div>

    <div v-if="response" class="mt-8">
      <div class="mb-6 p-4 border border-gray-200 rounded-lg shadow-md bg-white">
        <p class="text-gray-700">
          <mathjax>{{ response }}</mathjax>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      query: '',
      response: null,
      loading: false,
      error: null,
    }
  },

  methods: {
    async askQuestion() {
      if (!this.query) {
        this.error = 'Please enter a URL.'
        return
      }

      this.loading = true
      this.error = null

      try {
        const response = await axios.post(
          'http://localhost:3001/analyze',
          {
            websiteUrl: this.query,
          },
          {
            responseType: 'blob',
          },
        )

        const url = window.URL.createObjectURL(
          new Blob([response.data], { type: 'application/pdf' }),
        )
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', 'analysis_report.pdf')
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      } catch (err) {
        this.error = 'Failed to process your query. Please try again.'
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
