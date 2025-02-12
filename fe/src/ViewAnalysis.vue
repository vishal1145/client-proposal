<template>
  <div class="analysis-container">
    <!-- Services Section -->
    <section class="services-section">
      <h2 class="section-title">Services</h2>
      <div class="services-grid">
        <div v-for="(service, index) in services" :key="index" class="service-card">
          <h3>{{ service.nature }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </section>

    <!-- Links Section -->
    <section class="links-section">
      <h2 class="section-title">Useful Links</h2>
      <div class="links-grid">
        <a v-for="(link, index) in links" 
           :key="index" 
           :href="link.url" 
           target="_blank"
           class="link-card">
          {{ link.url }}
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ViewAnalysis',
  data() {
    return {
      services: [],
      links: []
    }
  },
  async created() {
    try {
      // Replace with your actual API endpoint
      const apiUrl = 'http://localhost:4000/api';
      const response = await axios.get(`${apiUrl}/analysis?id=${this.$route.params.id}`);
      this.services = response.data.analysis.allServices;
      this.links = response.data.analysis.links;
    } catch (error) {
      console.error('Error fetching data:', error);
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
</style>
