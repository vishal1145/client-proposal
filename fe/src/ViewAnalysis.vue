<template>
  <div class="analysis-container">
    <table class="data-table">
      <thead>
        <tr>
          <th>Links</th>
          <th>Services</th>
        </tr>
      </thead>
      <tbody>
        <!-- Loading state -->
        <tr v-if="isLoading" v-for="i in 3" :key="`loader-${i}`">
          <td><div class="skeleton-loader"></div></td>
          <td><div class="skeleton-loader"></div></td>
        </tr>
        <!-- Data state -->
        <tr v-else v-for="i in Math.max(links.length, services.length)" :key="i">
          <td>{{ links[i-1]?.url || '' }}</td>
          <td>{{ services[i-1] || '' }}</td>
        </tr>
      </tbody>
    </table>
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
      isLoading: true
    }
  },
  async created() {
    try {
      this.isLoading = true;
      const apiUrl = 'http://localhost:4000/api';
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
</style>
