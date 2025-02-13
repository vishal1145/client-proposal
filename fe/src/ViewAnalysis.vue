<template>
  <div class="analysis-container">
    <!-- Replace table with tabs -->
    <div class="tabs-container">
      <div class="tabs">
        <button 
          :class="['tab-button', { active: activeTab === 'links' }]" 
          @click="activeTab = 'links'"
        >
          Links
        </button>
        <button 
          :class="['tab-button', { active: activeTab === 'services' }]" 
          @click="activeTab = 'services'"
        >
          Services
        </button>
      </div>

      <div class="tab-content">
        <!-- Loading state -->
        <div v-if="isLoading">
          <div v-for="i in 3" :key="`loader-${i}`" class="skeleton-loader"></div>
        </div>
        
        <!-- Links tab -->
        <div v-else-if="activeTab === 'links'" class="links-list">
          <div v-for="(link, index) in links" :key="`link-${index}`" class="link-item">
            {{ link.url }}
          </div>
        </div>

        <!-- Services tab -->
        <div v-else-if="activeTab === 'services'" class="services-list">
          <div v-for="(service, index) in services" :key="`service-${index}`" class="service-item">
            {{ service }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ViewAnalysis',
  data() {
    return {
      services: [],
      links: [],
      isLoading: true,
      activeTab: 'links'
    }
  },
  async created() {
    try {
      this.isLoading = true;
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';
      const response = await axios.get(`${apiUrl}/analysis?id=${this.$route.params.id}`);
      this.services = response.data.analysis.allServices;
      this.links = response.data.analysis.links;
      console.log("services", response.data.analysis.allServices);
      console.log("links", response.data.analysis.links);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      this.isLoading = false;
    }
  }
}
</script>   

<style scoped>
.analysis-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.section-title {
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.service-card {
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

.service-card p {
  color: #666;
  line-height: 1.6;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.link-card {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  text-decoration: none;
  color: #007bff;
  text-align: center;
  transition: background-color 0.3s ease;
}

.link-card:hover {
  background: #e9ecef;
}

@media (max-width: 768px) {
  .analysis-container {
    padding: 1rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  margin: 2rem 0;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.data-table th,
.data-table td {
  padding: 1rem;
  text-align: left;
  border: 1px solid #dee2e6;
}

.data-table th {
  background-color: #f8f9fa;
  font-weight: bold;
  color: #333;
}

.data-table tr:nth-child(even) {
  background-color: #f8f9fa;
}

.data-table tr:hover {
  background-color: #e9ecef;
}

.skeleton-loader {
  height: 20px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 4px;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

/* Add new styles for tabs */
.tabs-container {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.tabs {
  display: flex;
  border-bottom: 1px solid #dee2e6;
}

.tab-button {
  padding: 1rem 2rem;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1rem;
  color: #666;
  transition: all 0.3s ease;
}

.tab-button:hover {
  background-color: #f8f9fa;
}

.tab-button.active {
  color: #007bff;
  border-bottom: 2px solid #007bff;
}

.tab-content {
  padding: 2rem;
}

.links-list, .services-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.link-item, .service-item {
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 6px;
  transition: background-color 0.3s ease;
}

.link-item:hover, .service-item:hover {
  background-color: #e9ecef;
}

/* Update skeleton loader for tabs */
.skeleton-loader {
  margin-bottom: 1rem;
}
</style>
