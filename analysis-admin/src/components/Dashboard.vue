<template>
  <div class="p-8">
    <!-- Loading Overlay -->
    <div v-if="isLoading" class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded-lg shadow-xl flex items-center space-x-4">
        <div class="animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent"></div>
        <span class="text-gray-700 text-lg">Loading...</span>
      </div>
    </div>

    <!-- Rest of the content -->
    <div :class="{ 'opacity-50': isLoading }">

      <div class="flex justify-between items-center mb-6">
        <div>
          <h1 class="text-2xl font-semibold">Reviews</h1>
          <p class="text-gray-600 mt-1">Manage your company reviews and analysis</p>
        </div>
        <!-- Header Section - Only show when there's data -->
        <div class="flex gap-4" v-if="reviewItems.length > 0">
          <div class="bg-blue-50 rounded-lg px-4 py-2 cursor-pointer transition-all hover:bg-blue-100 hover:shadow-md">
            <div class="text-sm text-blue-600">Total Reviews</div>
            <div class="text-2xl font-semibold text-blue-700">{{ reviewItems.length }}</div>
          </div>
          <div
            class="bg-green-50 rounded-lg px-4 py-2 cursor-pointer transition-all hover:bg-green-100 hover:shadow-md">
            <div class="text-sm text-green-600">Average Percentage</div>
            <div class="text-2xl font-semibold text-green-700">{{ averagePercentage }}%</div>
          </div>
        </div>
      </div>

      <!-- Review Requests Section -->
      <div class="bg-white rounded-lg shadow">
        <!-- Search and Filter - Only show when there's data -->
        <div v-if="reviewItems.length > 0" class="px-6 py-4 border-b border-gray-200">
          <div class="flex justify-between items-center">
            <h2 class="text-lg font-medium">Review Analysis</h2>
            <div class="flex gap-4 items-center">
              <input type="text" v-model="searchQuery" placeholder="Search..."
                class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />

              <!-- Status Filter Dropdown -->
              <select v-model="statusFilter"
                class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">All Status</option>
                <option value="pending">Pending</option>
                <option value="accept">Accepted</option>
                <option value="reject">Rejected</option>
              </select>
            </div>
          </div>
        </div>

        <table class="w-full">
          <thead class="bg-gray-100 border-b border-gray-200">
            <tr>
              <th v-for="column in columns" :key="column.key" @click="sortBy(column.key)"
                class="px-8 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer select-none">
                <div class="flex items-center gap-2">
                  {{ column.label }}
                  <span v-if="sortColumn === column.key" class="text-gray-900">
                    {{ sortDirection === 'asc' ? '↑' : '↓' }}
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <!-- No Records Message -->
            <tr v-if="paginatedData.length === 0">
              <td :colspan="columns.length" class="px-8 py-16 text-center">
                <div class="flex flex-col items-center justify-center text-gray-500">
                  <svg class="w-16 h-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p class="text-xl font-medium mb-2">No Records Found</p>
                  <p class="text-sm">
                    {{ searchQuery || statusFilter ?
                    'Try adjusting your search or filter to find what you\'re looking for.' :
                    'There are no reviews available at the moment.' }}
                  </p>
                </div>
              </td>
            </tr>

            <!-- Existing Records -->
            <tr v-else v-for="item in paginatedData" :key="item._id" class="hover:bg-gray-100">
              <td class="px-8 py-6">
                <div class="flex items-center">
                  <!-- <img :src="`https://ui-avatars.com/api/?name=${item.companyname}&background=6366f1&color=fff`"
                    alt="Company" class="w-10 h-10 rounded-full mr-4 object-cover" /> -->
                  <div>
                    <div class="font-medium text-gray-900">{{ item.companyname }}</div>
                    <div class="text-sm text-gray-500">{{ item.place }}</div>
                  </div>
                </div>
              </td>
              <td class="px-8 py-6">
                <div class="text-sm text-gray-900">{{ item.review }}</div>
              </td>
              <td class="px-8 py-6">
                <div class="flex flex-col">
                  <div class="w-full bg-gray-200 rounded-full h-2.5">
                    <div class="bg-blue-600 h-2.5 rounded-full" :style="{ width: item.percentage + '%' }"></div>
                  </div>
                  <span class="text-xs text-gray-600 mt-1">{{ item.percentage }}% </span>
                </div>
              </td>
              <td class="px-8 py-6">
                <!-- Show status badge only for accepted/rejected items -->
                <div v-if="item.status === 'accept'" class="mb-3">
                  <span :class="getStatusClass('accept')">
                    Accepted
                  </span>
                </div>
                <div v-else-if="item.status === 'reject'" class="mb-3">
                  <span :class="getStatusClass('reject')">
                    Rejected
                  </span>
                </div>
                <!-- Show action buttons for pending or no status -->
                <div v-else-if="!item.status || item.status === 'pending'" class="flex gap-3">
                  <button @click="updateStatus(item._id, 'accept')"
                    class="px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 bg-green-50 text-green-700 hover:bg-green-100">
                    Accept
                  </button>
                  <button @click="updateStatus(item._id, 'reject')"
                    class="px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 bg-red-50 text-red-700 hover:bg-red-100">
                    Reject
                  </button>
                </div>
              </td>
              <td class="px-8 py-6 text-sm text-gray-500">
                {{ formatDate(item.createdate) }}
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Pagination -->
        <div v-if="paginatedData.length > 0" class="px-8 py-4 border-t border-gray-200">
          <div class="flex items-center justify-between">
            <div class="text-sm text-gray-700">
              Showing {{ startIndex + 1 }} to {{ endIndex }} of {{ filteredData.length }} results
            </div>
            <div class="flex gap-2">
              <button @click="currentPage--" :disabled="currentPage === 1"
                class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                Previous
              </button>
              <button v-for="page in displayedPages" :key="page" @click="currentPage = page"
                class="px-4 py-2 border rounded-md text-sm font-medium"
                :class="currentPage === page ? 'bg-blue-50 border-blue-500 text-blue-600' : 'border-gray-300 text-gray-700 hover:bg-gray-50'">
                {{ page }}
              </button>
              <button @click="currentPage++" :disabled="currentPage >= totalPages"
                class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Dashboard-component',
  data() {
    return {
      isLoading: true,
      searchQuery: '',
      statusFilter: '',
      currentPage: 1,
      itemsPerPage: 5,
      sortColumn: 'createdate',
      sortDirection: 'desc',
      columns: [
        { key: 'companyname', label: 'COMPANY & LOCATION' },
        { key: 'review', label: 'REVIEW' },
        { key: 'percentage', label: 'PERCENTAGE' },
        { key: 'status', label: 'STATUS' },
        { key: 'createdate', label: 'DATE & TIME' }
      ],
      reviewItems: []
    }
  },
  async created() {
    await this.fetchReviews();
  },
  computed: {
    averagePercentage() {
      if (this.reviewItems.length === 0) return 0;
      const total = this.reviewItems.reduce((sum, item) => sum + item.percentage, 0);
      return Math.round(total / this.reviewItems.length);
    },
    filteredData() {
      let data = [...this.reviewItems]

      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase()
        data = data.filter(item =>
          item.companyname.toLowerCase().includes(query) ||
          item.review.toLowerCase().includes(query) ||
          item.place.toLowerCase().includes(query)
        )
      }

      if (this.statusFilter) {
        data = data.filter(item => {
          if (this.statusFilter === 'pending') {
            return item.status !== 'accept' && item.status !== 'reject';
          }
          return item.status === this.statusFilter;
        });
      }

      data.sort((a, b) => {
        let aValue = a[this.sortColumn]
        let bValue = b[this.sortColumn]

        if (this.sortColumn === 'createdate') {
          aValue = new Date(aValue)
          bValue = new Date(bValue)
        }

        if (this.sortDirection === 'asc') {
          return aValue > bValue ? 1 : -1
        }
        return aValue < bValue ? 1 : -1
      })

      return data
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.itemsPerPage
      const end = start + this.itemsPerPage
      return this.filteredData.slice(start, end)
    },
    totalPages() {
      return Math.ceil(this.filteredData.length / this.itemsPerPage)
    },
    startIndex() {
      return (this.currentPage - 1) * this.itemsPerPage
    },
    endIndex() {
      const end = this.startIndex + this.itemsPerPage
      return Math.min(end, this.filteredData.length)
    },
    displayedPages() {
      const pages = []
      const maxPages = 5

      if (this.totalPages <= maxPages) {
        for (let i = 1; i <= this.totalPages; i++) {
          pages.push(i)
        }
      } else {
        let start = Math.max(1, this.currentPage - 2)
        let end = Math.min(this.totalPages, start + maxPages - 1)

        if (end - start < maxPages - 1) {
          start = Math.max(1, end - maxPages + 1)
        }

        for (let i = start; i <= end; i++) {
          pages.push(i)
        }
      }

      return pages
    }
  },
  methods: {
    async fetchReviews() {
      this.isLoading = true;
      try {
        const response = await axios.get('https://analysis-be.algofolks.com/api/reviews');
        this.reviewItems = response.data;
      } catch (error) {
        console.error('Error fetching reviews:', error);
      } finally {
        this.isLoading = false;
      }
    },
    formatDate(dateString) {
      return new Date(dateString).toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
    },
    sortBy(column) {
      if (this.sortColumn === column) {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortColumn = column;
        this.sortDirection = 'asc';
      }
    },
    getStatusText(status) {
      switch (status) {
        case 'accept':
          return 'Accepted';
        case 'reject':
          return 'Rejected';
        default:
          return 'Pending';
      }
    },
    getStatusClass(status) {
      const baseClasses = 'px-4 py-2 rounded-full text-sm font-medium inline-block';
      switch (status) {
        case 'accept':
          return `${baseClasses} bg-green-100 text-green-800`;
        case 'reject':
          return `${baseClasses} bg-red-100 text-red-800`;
        default:
          return `${baseClasses} bg-yellow-100 text-yellow-800`;
      }
    },
    async updateStatus(id, status) {
      try {
        this.isLoading = true;
        await axios.put(`https://analysis-be.algofolks.com/api/reviews/${id}/status`, {
          status: status
        });
        // Update local state
        const index = this.reviewItems.findIndex(item => item._id === id);
        if (index !== -1) {
          this.reviewItems[index].status = status;
        }
      } catch (error) {
        console.error('Error updating status:', error);
      } finally {
        this.isLoading = false;
      }
    },
  }
}
</script>

<style scoped>
.hover\:bg-gray-50:hover {
  background-color: rgba(249, 250, 251, 1);
}

/* Add these styles for smooth transitions */
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

/* Add smooth transitions for status badges */
[class*="bg-"] {
  transition: all 0.2s ease-in-out;
}

/* Add transition for button states */
button {
  transition: all 0.2s ease-in-out;
}

button:disabled {
  opacity: 0.7;
}

/* Add transition for notifications */
.transition-opacity {
  transition: opacity 0.5s ease-in-out;
}
</style>