<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="flex justify-end items-center mb-8">
        <button 
          class="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-[14px] text-white font-semibold rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-md"
          @click="openModal"
        >
          <svg class="w-4 h-4 mr-2 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
          </svg>
          Add Analysis
        </button>
      </div>

      <!-- Table Section -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden">
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-100">
              <tr>
                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">URL</th>
                <th class="pl-0 pr-8 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider w-48">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-if="isLoading">
                <td colspan="2" class="px-6 py-4">
                  <div class="animate-pulse space-y-4">
                    <!-- Skeleton rows -->
                    <div v-for="i in 3" :key="i" class="flex items-center justify-between">
                      <div class="flex items-center">
                        <div class="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                        <div class="h-4 w-64 bg-gray-200 rounded"></div>
                      </div>
                      <div class="flex space-x-4">
                        <div class="h-8 w-20 bg-gray-200 rounded-lg"></div>
                        <div class="h-8 w-24 bg-gray-200 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr v-else-if="urlList.length === 0">
                <td colspan="2" class="px-6 py-10 text-center text-gray-500">
                  No analyses found. Add one to get started.
                </td>
              </tr>
              <tr v-for="(item, index) in urlList" :key="index" class="hover:bg-gray-50 transition-colors">
                <td class="px-6 py-5">
                  <div class="flex items-center">
                    <div class="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                      <svg class="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                      </svg>
                    </div>
                    <span class="text-sm font-medium text-gray-900">{{ item.url }}</span>
                  </div>
                </td>
                <td class="pl-0 pr-8 py-5">
                  <div class="flex space-x-4">
                    <button 
                      class="inline-flex items-center px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-medium rounded-lg transition-colors"
                      @click="viewUrl(item)"
                    >
                      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                      </svg>
                      View
                    </button>
                    <button 
                      class="inline-flex items-center px-4 py-2 bg-amber-50 hover:bg-amber-100 text-amber-700 font-medium rounded-lg transition-colors"
                      @click="reanalyzeUrl(item)"
                      :disabled="reanalyzingIds.has(item._id)"
                    >
                      <svg v-if="reanalyzingIds.has(item._id)" class="animate-spin w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <svg v-else class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                      </svg>
                      {{ reanalyzingIds.has(item._id) ? 'Reanalyzing...' : 'Reanalyze' }}
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="fixed inset-0 overflow-y-auto z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <!-- Background overlay -->
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

        <!-- Modal panel -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6 relative">
          <div class="absolute top-0 right-0 pt-4 pr-4">
            <button 
              @click="closeModal"
              class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span class="sr-only">Close</span>
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div class="sm:flex sm:items-start">
            <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
              <svg class="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
              <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                Add New Analysis
              </h3>
              <div class="mt-4">
                <input 
                  type="text" 
                  v-model="newUrl" 
                  placeholder="Enter website URL"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm text-sm"
                />
              </div>
            </div>
          </div>

          <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
            <button 
              type="button"
              class="w-full inline-flex justify-center rounded-lg border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
              @click="saveUrl"
              :disabled="isSaving"
            >
              <svg v-if="isSaving" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ isSaving ? 'Adding...' : 'Add' }}
            </button>
            <button 
              type="button"
              class="mt-3 w-full inline-flex justify-center rounded-lg border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
              @click="closeModal"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'WebsiteReviewPage',
  data() {
    return {
      showModal: false,
      newUrl: '',
      urlList: [],
      isLoading: false,
      isSaving: false,
      reanalyzingIds: new Set() // Track which items are being reanalyzed
    }
  },
  async created() {
    await this.fetchAnalyses()
  },
  methods: {
    openModal() {
      this.showModal = true
      this.newUrl = '' // Reset the input field
    },
    closeModal() {
      this.showModal = false
    },
    async fetchAnalyses() {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';
      this.isLoading = true;
      try {
        const response = await axios.get(`${apiUrl}/analysis/all`)
        if (response.data.success) {
          this.urlList = response.data.data
        }
      } catch (error) {
        console.error('Error fetching analyses:', error)
      } finally {
        this.isLoading = false;
      }
    },
    async saveUrl() {
      if (this.newUrl.trim()) {
        this.isSaving = true;
        try {
          const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';
          const response = await axios.post(`${apiUrl}/analysis`, {
            url: this.newUrl.trim()
          });
          
          if (response.data.success) {
            await this.fetchAnalyses();
            this.closeModal();
          }
        } catch (error) {
          console.error('Error saving URL:', error);
        } finally {
          this.isSaving = false;
        }
      }
    },
    viewUrl(item) {
      this.$router.push(`/analysis/${item._id}`);
    },
    async reanalyzeUrl(item) {
      this.reanalyzingIds.add(item._id);
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';
        const response = await axios.post(`${apiUrl}/analysis`, {
          url: item.url
        });
        
        if (response.data.success) {
          await this.fetchAnalyses();
        }
      } catch (error) {
        console.error('Error reanalyzing URL:', error);
      } finally {
        this.reanalyzingIds.delete(item._id);
      }
    }
  }
}
</script>