<template>
  <div class="p-8">
    <h1 class="text-2xl font-semibold mb-6">Settings</h1>
    
    <!-- Tabs -->
    <div class="mb-6 border-b border-gray-200">
      <nav class="flex space-x-8" aria-label="Settings tabs">
        <button 
          @click="activeTab = 'priority'"
          :class="[
            'py-4 px-1 font-medium text-sm border-b-2 -mb-px',
            activeTab === 'priority'
              ? 'border-blue-500 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          ]"
        >
          Priority
        </button>
        <button 
          @click="activeTab = 'prompts'"
          :class="[
            'py-4 px-1 font-medium text-sm border-b-2 -mb-px',
            activeTab === 'prompts'
              ? 'border-blue-500 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          ]"
        >
          Prompts
        </button>
      </nav>
    </div>

    <!-- Priority Tab Content -->
    <div v-if="activeTab === 'priority'" class="bg-white rounded-lg shadow p-6">
      <div class="max-w-2xl">
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Priority Value
        </label>
        <input 
          type="text"
          v-model="priorityValue"
          class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 mb-4"
          placeholder="Enter priority value"
        />
        <p class="text-sm text-gray-500 mb-4">
          Set the priority value for review analysis.
        </p>
        <div class="flex justify-start">
          <button 
            @click="updatePriority"
            class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            :disabled="isUpdating"
          >
            {{ isUpdating ? 'Updating...' : 'Update Priority' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Prompts Tab Content -->
    <div v-if="activeTab === 'prompts'" class="bg-white rounded-lg shadow p-6">
      <div class="max-w-2xl">
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Analysis Prompt
        </label>
        <textarea 
          v-model="promptValue"
          rows="6"
          class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 mb-4"
          placeholder="Enter your analysis prompt here..."
        ></textarea>
        <p class="text-sm text-gray-500 mb-4">
          Configure the prompt used for review analysis.
        </p>
        <div class="flex justify-start">
          <button 
            @click="updatePrompt"
            class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            :disabled="isUpdating"
          >
            {{ isUpdating ? 'Updating...' : 'Update Prompt' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Settings',
  data() {
    return {
      activeTab: 'priority',
      priorityValue: '',
      promptValue: '',
      isUpdating: false
    }
  },
  methods: {
    async updatePriority() {
      this.isUpdating = true;
      try {
        // Add your API call here
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
        // Show success message
      } catch (error) {
        // Handle error
        console.error('Error updating priority:', error);
      } finally {
        this.isUpdating = false;
      }
    },
    async updatePrompt() {
      this.isUpdating = true;
      try {
        // Add your API call here
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
        // Show success message
      } catch (error) {
        // Handle error
        console.error('Error updating prompt:', error);
      } finally {
        this.isUpdating = false;
      }
    }
  }
}
</script> 