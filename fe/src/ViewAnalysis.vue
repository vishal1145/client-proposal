<template>
  <div class="analysis-container">
    <!-- Add loading overlay -->
    <div v-if="isGenerating" class="loading-overlay">
      <div class="loader"></div>
      <p>Generating proposals...</p>
    </div>

    <!-- Replace table with tabs -->
    <div class="tabs-container">
      <div class="header-container">
        <div class="tabs">
          <button :class="['tab-button', { active: activeTab === 'links' }]" @click="activeTab = 'links'">
            Links
          </button>
          <button :class="['tab-button', { active: activeTab === 'services' }]" @click="activeTab = 'services'">
            Services
          </button>
        </div>

      </div>

      <div class="tab-content">
        <!-- Loading state -->
        <div v-if="isLoading">
          <div v-for="i in 3" :key="`loader-${i}`" class="skeleton-loader"></div>
        </div>

        <!-- Links tab -->
        <div v-else-if="activeTab === 'links'" class="links-list">
          <div v-for="(link, index) in links" :key="`link-${index}`" class="link-item flex justify-between gap-10"
            :class="{ 'selected': selectedLinks.includes(link.url) }">
            <div class="link-content">
              <!-- <input type="checkbox" :checked="selectedLinks.includes(link.url)"
                @change.stop="toggleLinkSelection(link.url)"> -->
              <span>{{ link.url }}</span>
            </div>
            <button
              class="inline-flex items-center px-4 py-2 bg-amber-50 hover:bg-amber-100 text-amber-700 font-medium rounded-lg transition-colors">
              <!-- <svg v-if="reanalyzingIds.has(item._id)" class="animate-spin w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                </circle>
                <path class="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
              </svg> -->
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <!-- {{ reanalyzingIds.has(item._id) ? 'Reanalyzing...' : 'Reanalyze' }} -->
              Reanalyze
            </button>
          </div>

        </div>

        <!-- Services tab -->
        <!-- <div v-else-if="activeTab === 'services'" class="services-list">
          <div v-for="(service, index) in services" :key="`service-${index}`" class="service-card">

            <div class="service-content">
              <div class="service-section"
                :class="{ 'selected': isServiceSectionSelected(service, 'business_summary') }"
                @click="navigateToServiceDetail('Business Summary', service.business_summary)">
                <div class="section-header">
                  <h3>Business Summary</h3>
                </div>
                <p>{{ service.business_summary }}</p>
              </div>



              <div class="service-section" :class="{ 'selected': isServiceSectionSelected(service, 'key_services') }"
                @click="navigateToServiceDetail('Key Services', service.key_services)">
                <div class="section-header">
                 
                  <h3>Key Services</h3>
                </div>
                <p>{{ service.key_services }}</p>
              </div>


              <div class="service-section"
                :class="{ 'selected': isServiceSectionSelected(service, 'possible_software') }"
                @click="navigateToServiceDetail('Possible Software', service.possible_software)">
                <div class="section-header">
                  
                  <h3>Possible Software</h3>
                </div>
                <p>{{ service.possible_software }}</p>
              </div>


              <div class="service-section"
                :class="{ 'selected': isServiceSectionSelected(service, 'possible_software_solutions_description') }"
                @click="navigateToServiceDetail('Software Solutions Description', service.possible_software_solutions_description)">
                <div class="section-header">

                  <h3>Software Solutions Description</h3>
                </div>
                <p>{{ service.possible_software_solutions_description }}</p>
              </div>


              <div class="service-section"
                :class="{ 'selected': isServiceSectionSelected(service, 'possible_software_solutions') }"
                @click="navigateToServiceDetail('Software Solutions', service.possible_software_solutions)">
                <div class="section-header">
                  
                  <h3>Software Solutions</h3>
                </div>
                <p>{{ service.possible_software_solutions }}</p>
              </div>


              <div class="service-section"
                :class="{ 'selected': isServiceSectionSelected(service, 'possible_software_solutions_features') }"
                @click="navigateToServiceDetail('Features', service.possible_software_solutions_features)">
                <div class="section-header">
                  
                  <h3>Features</h3>
                </div>
                <p>{{ service.possible_software_solutions_features }}</p>
              </div>


              <div class="service-section"
                :class="{ 'selected': isServiceSectionSelected(service, 'possible_software_solutions_benefits') }"
                @click="navigateToServiceDetail('Benefits', service.possible_software_solutions_benefits)">
                <div class="section-header">
                  
                  <h3>Benefits</h3>
                </div>
                <p>{{ service.possible_software_solutions_benefits }}</p>
              </div>

              <div class="service-section"
                :class="{ 'selected': isServiceSectionSelected(service, 'possible_software_solutions_pricing') }"
                @click="navigateToServiceDetail('Pricing', service.possible_software_solutions_pricing)">
                <div class="section-header">
                 
                  <h3>Pricing</h3>
                </div>
                <p>{{ service.possible_software_solutions_pricing }}</p>
              </div>


              <div class="service-section"
                :class="{ 'selected': isServiceSectionSelected(service, 'possible_software_solutions_comparison') }"
                @click="navigateToServiceDetail('Comparison', service.possible_software_solutions_comparison)">
                <div class="section-header">
                 
                  <h3>Comparison</h3>
                </div>
                <p>{{ service.possible_software_solutions_comparison }}</p>
              </div>
            </div>
          </div>
        </div> -->
        <div v-else-if="activeTab === 'services'" class="services-list">
          <div v-for="(service, index) in services" :key="index" class="service-card">
            <div class="service-content">
              <div class="service-section" @click="navigateToServiceDetail(service.id)">
                <p><strong>{{ service.business_summary }}</strong></p>
                <p><strong>{{ service.key_services }}</strong></p>
                <p><strong>{{ service.target_audience }}</strong></p>
                <p><strong>{{ service.revenue_model }}</strong></p>
                <p><strong>{{ service.existing_technology }}</strong></p>
                <p><strong>{{ service.operational_challenges }}</strong></p>
                <p><strong>{{ service.market_trends }}</strong></p>
                <p><strong>{{ service.competitive_gap }}</strong></p>
                <p><strong>{{ service.compliance_needs }}</strong></p>
                <p><strong>{{ service.most_valuable_software_feature.feature_name }}</strong></p>
                <p><strong>{{ service.most_valuable_software_feature.feature_description }}</strong></p>
                <p><strong>{{ service.most_valuable_software_feature.expected_benefits }}</strong></p>
                <p><strong>{{ service.most_valuable_software_feature.ROI_justification }}</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Update selection summary -->
    <div class="selection-summary" v-if="hasSelections">
      <p style="font-size: 14px;">Selected: {{ selectedLinks.length }} links, {{ selectedSections.length }} sections</p>
      <button class="proposal-button" style="margin-right: 0px;" @click="generateProposals"
        :disabled="!hasSelections || isGenerating">
        {{ isGenerating ? 'Generating...' : 'Generate Proposals' }}
      </button>
      <button class="proposal-button" style="margin-right: 0px; " @click="sendEmail">
        Send Mail
      </button>
      <button class="proposal-button" style="margin-right: 0px; " @click="openPreviewPopup">
        Preview
      </button>
    </div>
    <!-- Preview Popup Component -->
    <PreviewPopup :visible="isPreviewPopupVisible" @close="closePreviewPopup" />
  </div>
</template>

<script>
import axios from 'axios';
import { useToast } from 'vue-toastification';
import PreviewPopup from './PreviewPopup.vue';
const toast = useToast();
export default {
  name: 'ViewAnalysis',
  components: { PreviewPopup },

  data() {
    return {
      services: [],
      links: [],
      isLoading: true,
      activeTab: 'links',
      selectedLinks: [],
      selectedSections: [],
      isGenerating: false,
      isPreviewPopupVisible: false,
      analysisId: this.$route.params.id,
      serviceid: ''
    }
  },
  computed: {
    hasSelections() {
      return this.selectedLinks.length > 0 || this.selectedSections.length > 0;
    }
  },
  async created() {
    try {
      this.isLoading = true;
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';
      const response = await axios.get(`${apiUrl}/analysis?id=${this.analysisId}`);
      this.services = response.data.analysis.allServices;
      this.links = response.data.analysis.links;
      console.log("services", response.data.analysis.allServices);
      console.log("links", response.data.analysis.links);
      this.email = response.data.analysis.email;
      this.serviceid = response.data.analysis.allServices[0]?.id;
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      this.isLoading = false;
    }
  },
  methods: {
    toggleLinkSelection(url) {
      const index = this.selectedLinks.indexOf(url);
      if (index === -1) {
        this.selectedLinks.push(url);
      } else {
        this.selectedLinks.splice(index, 1);
      }
    },
    toggleServiceSection(service, sectionName) {
      const selection = {
        serviceId: service.id,
        section: sectionName,
        content: service[sectionName]
      };

      const index = this.selectedSections.findIndex(
        item => item.serviceId === service.id && item.section === sectionName
      );

      if (index === -1) {
        this.selectedSections.push(selection);
      } else {
        this.selectedSections.splice(index, 1);
      }
    },
    isServiceSectionSelected(service, sectionName) {
      return this.selectedSections.some(
        item => item.serviceId === service.id && item.section === sectionName
      );
    },
    navigateToServiceDetail(id) {
      this.$router.push({
        path: '/service-detail',
        query: { analysisId: this.analysisId, serviceId: id },
      });
    },

    async generateProposals() {
      try {
        this.isGenerating = true;
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';

        const formattedData = {
          links: this.selectedLinks,
          services: this.selectedSections.map(section => {
            const service = {};
            service[section.section] = section.content;
            return service;
          })
        };

        const response = await axios.post(`${apiUrl}/proposals/generate-proposal`, formattedData);
        const html = response.data.data;

        // Create and open new tab with the HTML content
        const newTab = window.open();
        if (!newTab) {
          alert("Popup might be blocked. Please enable popups for this site.");
          throw new Error("Failed to open new tab. Popup might be blocked.");
        }

        newTab.document.open();
        newTab.document.write(html);
        newTab.document.close();
      } catch (error) {
        console.error('Error generating proposals:', error);
      } finally {
        this.isGenerating = false;
      }
    },
    async sendEmail() {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';
        const response = await axios.post(`${apiUrl}/email/send-email`, {
          to: this.email,
        });
        console.log(response.data.message);
        toast.success('Email sent successfully!');
      } catch (error) {
        console.error('Error sending email:', error);
        toast.error('Failed to send email.');
      }
    },
    openPreviewPopup() {
      this.isPreviewPopupVisible = true;
    },

    closePreviewPopup() {
      this.isPreviewPopupVisible = false;
    },
  },
  watch: {
    activeTab(newTab) {
      if (newTab === 'proposals') {
        this.fetchProposals();
      }
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

/* .service-card {
  background: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  border: 1px solid #e0e0e0;
} */

.service-card h3 {
  color: #2c3e50;
  margin: 1.5rem 0 0.5rem 0;
  font-size: 1.25rem;
}

.service-card h3:first-child {
  margin-top: 0;
}

.service-card p {
  color: #666;
  line-height: 1.6;
  margin: 0;
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

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dee2e6;
}

.tabs {
  display: flex;
  border-bottom: none;
}

.tab-button {
  padding: 1rem 2rem;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 16px;
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

.links-list,
.services-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.link-item,
.service-item {
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 6px;
  transition: background-color 0.3s ease;
}

.link-item:hover,
.service-item:hover {
  background-color: #e9ecef;
}

/* Update skeleton loader for tabs */
.skeleton-loader {
  margin-bottom: 1rem;
}

.proposal-button {
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 14px;
}

.proposal-button:hover {
  background-color: #0056b3;
}

.link-item,
.service-card {
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
}

.link-item.selected,
.service-card.selected {
  background-color: #e3f2fd;
  border: 1px solid #2196f3;
}

.link-content,
.service-header {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.selection-summary {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  padding: 1rem 2rem;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  gap: 15px;
  align-items: center;
  z-index: 1000;
}

.selection-summary p {
  margin: 0;
  font-weight: 500;
}

.proposal-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
  opacity: 0.7;
}

.service-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
}

/* .service-content {
  margin-left: 2rem;
} */

.service-section {
  margin-bottom: 1.5rem;
}

.service-section:last-child {
  margin-bottom: 0;
}

.service-section h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 16px;
  font-weight: 600;
}

.service-section p {
  color: #666;
  line-height: 1.6;
  margin: 0;
  font-size: 14px;
}

.link-item {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  border: 1px solid #e0e0e0;
}

.link-content {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.link-content span {
  flex: 1;
  font-size: 14px;
}

input[type="checkbox"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: #2196f3;
}

.selected {
  background-color: #e3f2fd;
  border-color: #2196f3;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.service-section {
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.service-section.selected {
  background-color: #e3f2fd;
  border-color: #2196f3;
}

.service-section h3 {
  margin: 0;
  font-size: 16px;
  color: #2c3e50;
}

.service-section p {
  margin: 0.5rem 0 0.5rem 0;
  font-size: 14px;
}

/* Add loading overlay styles */
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1001;
}

.loader {
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid #007bff;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.loading-overlay p {
  font-size: 16px;
  color: #333;
}

.Mail-btn {
  display: flex;
  gap: 10px;
  width: 100%;
}
</style>
