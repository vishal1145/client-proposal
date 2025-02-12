<template>
  <div class="max-w-3xl mx-auto p-4 mt-12">
    <h1 class="text-2xl font-bold mb-4 text-center">Enter Subject</h1>
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
      Ask
    </button>

    <div v-if="loading" class="mt-4 text-blue-500 font-medium">Processing your query...</div>
    <div v-if="error" class="mt-4 text-red-500 font-bold">
      {{ error }}
    </div>

    <div v-if="quiz.length" class="mt-8">
      <div
        v-for="(item, index) in quiz"
        :key="index"
        class="mb-6 p-4 border border-gray-200 rounded-lg shadow-md bg-white"
      >
        <p class="text-gray-700 font-medium mb-2">Q{{ index + 1 }}: {{ item.question }}</p>
        <ul class="space-y-2">
          <li v-for="(option, i) in item.options" :key="i" class="flex items-center space-x-2">
            <input
              type="radio"
              :name="'question-' + index"
              :value="option"
              v-model="answers[index]"
              class="w-4 h-4"
            />
            <label class="text-gray-600">{{ option }}</label>
          </li>
        </ul>
      </div>

      <button
        @click="submitAnswers"
        class="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
      >
        Submit Answers
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      query: '',
      quiz: [],
      answers: [], 
      loading: false, 
      error: null, 
    }
  },

  methods: {
    async askQuestion() {
      if (!this.query.trim()) {
        this.error = 'Please enter subject.'
        return
      }

      this.loading = true
      this.error = null

      try {
        const { data } = await axios.post('http://localhost:3001/generate-quiz', {
          query: this.query,
        })
        this.quiz = data.quiz 
        this.answers = Array(data.quiz.length).fill(null) 
        console.log(data.quiz)
      } catch (err) {
        this.error = 'Failed to process your query. Please try again.'
      } finally {
        this.loading = false
      }
    },

    submitAnswers() {
      console.log('User Answers:', this.answers)

      const results = this.quiz.map((item, index) => {
        const isCorrect = item.answer === this.answers[index] 
        return {
          question: item.question,
          correctAnswer: item.answer,
          userAnswer: this.answers[index],
          isCorrect,
        }
      })

      console.log('Quiz Results:', results)

      alert(`You got ${results.filter((r) => r.isCorrect).length}/${this.quiz.length} correct!`)
    },
  },
}
</script>

<style scoped>
</style>
