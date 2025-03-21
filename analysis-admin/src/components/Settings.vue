<template>
  <div class="p-8">
    <!-- Loading Overlay -->
    <div v-if="isLoading || isLoadingPriority || isUpdating"
      class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded-lg shadow-xl flex items-center space-x-4">
        <div class="animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent"></div>
        <span class="text-gray-700 text-lg">Loading...</span>
      </div>
    </div>

    <!-- Rest of the content -->
    <div :class="{ 'opacity-50': isLoading || isLoadingPriority || isUpdating }">
      <h1 class="text-2xl font-semibold mb-6">Settings</h1>

      <!-- Tabs -->
      <div class="mb-6 border-b border-gray-200">
        <nav class="flex space-x-8" aria-label="Settings tabs">
          <button @click="activeTab = 'priority'" :class="[
            'py-4 px-1 font-medium text-sm border-b-2 -mb-px',
            activeTab === 'priority'
              ? 'border-blue-500 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          ]">
            Priority
          </button>
          <button @click="activeTab = 'prompts'" :class="[
            'py-4 px-1 font-medium text-sm border-b-2 -mb-px',
            activeTab === 'prompts'
              ? 'border-blue-500 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          ]">
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
          <input type="text" v-model="priorityValue"
            class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 mb-4"
            placeholder="Enter priority value" />
          <p class="text-sm text-gray-500 mb-4">
            Set the priority value for review analysis.
          </p>
          <div class="flex justify-start">
            <button @click="updatePriority"
              class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              :disabled="isUpdating">
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
          <textarea v-model="promptValue" rows="6"
            class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 mb-4"
            placeholder="Enter your analysis prompt here..."></textarea>
          <p class="text-sm text-gray-500 mb-4">
            Configure the prompt used for review analysis.
          </p>
          <div class="flex justify-start">
            <button @click="updatePrompt"
              class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              :disabled="isUpdating">
              {{ isUpdating ? 'Updating...' : 'Update Prompt' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { useToast } from 'vue-toastification';
const toast = useToast();

export default {
  name: 'Settings-component',
  data() {
    return {
      activeTab: 'priority',
      priorityValue: '',
      promptValue: '',
      isUpdating: false,
      isLoading: false,
      isLoadingPriority: false
    }
  },
  async created() {
    await Promise.all([this.fetchPrompt(), this.fetchPriority()]);
  },
  methods: {
    async fetchPriority() {
      this.isLoadingPriority = true;
      try {
        const response = await axios.get('https://analysis-be.algofolks.com/api/settings/priority');
        this.priorityValue = response.data.priority;
      } catch (error) {
        console.error('Error fetching priority:', error);
      } finally {
        this.isLoadingPriority = false;
      }
    },
    async fetchPrompt() {
      this.isLoading = true;
      try {
        const response = await axios.get('https://analysis-be.algofolks.com/api/settings/prompt');
        this.promptValue = response.data.prompt;
      } catch (error) {
        console.error('Error fetching prompt:', error);
      } finally {
        this.isLoading = false;
      }
    },
    async updatePriority() {
      this.isUpdating = true;
      try {
        await axios.put('https://analysis-be.algofolks.com/api/settings/priority', {
          priority: parseInt(this.priorityValue) // Convert string to number
        });

        // Refresh the priority value
        await this.fetchPriority();

        toast.success('Priority updated successfully'); // Show success message (optional)
      } catch (error) {
        console.error('Error updating priority:', error);
        toast.error('Failed to update priority. Please try again.');
      } finally {
        this.isUpdating = false;
      }
    },
    async updatePrompt() {
      this.isUpdating = true;
      try {
        await axios.put('https://analysis-be.algofolks.com/api/settings/prompt', {
          prompt: this.promptValue
        });

        // Refresh the prompt value
        await this.fetchPrompt();

        toast.success('Prompt updated successfully');
      } catch (error) {
        console.error('Error updating prompt:', error);
        toast.error('Failed to update prompt. Please try again.');
      } finally {
        this.isUpdating = false;
      }
    }
  }
}
</script>

<style scoped>
.opacity-50 {
  transition: opacity 0.3s ease-in-out;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>