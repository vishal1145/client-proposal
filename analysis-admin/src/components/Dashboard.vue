<template>
  <div class="p-8">
    <!-- Header Section -->
    <div class="flex justify-between items-center mb-6">
      <div>
        <h1 class="text-2xl font-semibold">Dashboard</h1>
        <p class="text-gray-600 mt-1">Manage your analysis reviews and approvals</p>
      </div>
      <div class="flex gap-4">
        <div class="bg-blue-50 rounded-lg px-4 py-2 cursor-pointer transition-all hover:bg-blue-100 hover:shadow-md">
          <div class="text-sm text-blue-600">Pending Reviews</div>
          <div class="text-2xl font-semibold text-blue-700">3</div>
        </div>
        <div class="bg-green-50 rounded-lg px-4 py-2 cursor-pointer transition-all hover:bg-green-100 hover:shadow-md">
          <div class="text-sm text-green-600">Approved</div>
          <div class="text-2xl font-semibold text-green-700">12</div>
        </div>
      </div>
    </div>

    <!-- Review Requests Section -->
    <div class="bg-white rounded-lg shadow">
      <div class="px-6 py-4 border-b border-gray-200">
        <div class="flex justify-between items-center">
          <h2 class="text-lg font-medium">Review Requests</h2>
          <div class="flex gap-4 items-center">
            <input type="text" v-model="searchQuery" placeholder="Search..."
              class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            <select v-model="statusFilter"
              class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="">All Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>
      </div>

      <table class="w-full">
        <thead class="bg-gray-50 border-b border-gray-200">
          <tr>
            <th v-for="column in columns" :key="column.key" @click="sortBy(column.key)"
              class="px-8 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer select-none"
              :class="column.width">
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
          <tr v-for="item in paginatedData" :key="item.id" class="hover:bg-gray-50">
            <td class="px-8 py-6">
              <div class="flex items-center">
                <img :src="item.profileImage" alt="Profile" class="w-10 h-10 rounded-full mr-4 object-cover" />
                <div>
                  <div class="font-medium text-gray-900">{{ item.title }}</div>
                  <div class="text-sm text-gray-500">{{ item.date }}</div>
                </div>
              </div>
            </td>
            <td class="px-8 py-6 text-sm text-gray-900">
              {{ item.description }}
            </td>
            <td class="px-8 py-6">
              <div class="flex gap-3">
                <button class="px-5 py-2 bg-green-50 text-green-700 rounded-md text-sm font-medium hover:bg-green-100">
                  Approve
                </button>
                <button class="px-5 py-2 bg-red-50 text-red-700 rounded-md text-sm font-medium hover:bg-red-100">
                  Reject
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Pagination -->
      <div class="px-8 py-4 border-t border-gray-200">
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
</template>

<script>
export default {
  name: 'Dashboard-component',
  data() {
    return {
      searchQuery: '',
      statusFilter: '',
      currentPage: 1,
      itemsPerPage: 5,
      sortColumn: 'date',
      sortDirection: 'desc',
      columns: [
        { key: 'source', label: 'SOURCE', width: 'w-2/5' },
        { key: 'review', label: 'REVIEW', width: '' },
        { key: 'actions', label: 'ACTIONS', width: 'w-56' }
      ],
      reviewItems: [
        {
          id: 1,
          title: 'Market Analysis Report',
          date: '2024-03-15',
          description: 'Q4 2023 Market Trends Analysis',
          status: 'pending',
          profileImage: 'https://ui-avatars.com/api/?name=Market+Analysis&background=6366f1&color=fff'
        },
        {
          id: 2,
          title: 'Financial Report',
          date: '2024-03-14',
          description: 'Annual Financial Performance Review',
          status: 'approved',
          profileImage: 'https://ui-avatars.com/api/?name=Financial+Report&background=f59e0b&color=fff'
        },
        {
          id: 3,
          title: 'Customer Feedback',
          date: '2024-03-13',
          description: 'Customer Satisfaction Survey Results',
          status: 'rejected',
          profileImage: 'https://ui-avatars.com/api/?name=Customer+Feedback&background=10b981&color=fff'
        },
        {
          id: 4,
          title: 'Financial Report',
          date: '2024-03-14',
          description: 'Annual Financial Performance Review',
          status: 'approved',
          profileImage: 'https://ui-avatars.com/api/?name=Financial+Report&background=f59e0b&color=fff'
        },
        {
          id: 5,
          title: 'Financial Report',
          date: '2024-03-14',
          description: 'Annual Financial Performance Review',
          status: 'approved',
          profileImage: 'https://ui-avatars.com/api/?name=Financial+Report&background=f59e0b&color=fff'
        },
        {
          id: 6,
          title: 'Financial Report',
          date: '2024-03-14',
          description: 'Annual Financial Performance Review',
          status: 'approved',
          profileImage: 'https://ui-avatars.com/api/?name=Financial+Report&background=f59e0b&color=fff'
        },
      ]
    }
  },
  computed: {
    filteredData() {
      let data = [...this.reviewItems]

      // Apply search filter
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase()
        data = data.filter(item =>
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
        )
      }

      // Apply status filter
      if (this.statusFilter) {
        data = data.filter(item => item.status === this.statusFilter)
      }

      // Apply sorting
      data.sort((a, b) => {
        let aValue = a[this.sortColumn]
        let bValue = b[this.sortColumn]

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
      const maxPages = 5 // Show max 5 page numbers

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
    sortBy(column) {
      if (this.sortColumn === column) {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc'
      } else {
        this.sortColumn = column
        this.sortDirection = 'asc'
      }
    }
  }
}
</script>

<style scoped>
.hover\:bg-gray-50:hover {
  background-color: rgba(249, 250, 251, 1);
}
</style>