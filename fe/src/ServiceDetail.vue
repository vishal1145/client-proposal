<template>

    <div class="analysis-container">
        <div class="tabs-container">
            <div class="header-container">
                <div class="tabs">
                    <button :class="['tab-button', { active: activeTab === 'links' }]" @click="activeTab = 'links'">
                        Service Details
                    </button>
                </div>

            </div>

            <div class="tab-content">
                <div v-if="services.length === 0" class="service-content">
                    <div class="service-section" style="text-align: center;">
                        <p><strong>No service found</strong></p>
                    </div>
                </div>
                <div v-else v-for="(service, index) in services" :key="index" class="service-content">

                    <div class="service-section">
                        <p><strong>Business Summary:</strong> <br>  {{ service.business_summary }}</p>
                        <p><strong>Key Services:</strong> <br> {{ service.key_services }}</p>
                        <p><strong>Target Audience:</strong> <br> {{ service.target_audience }}</p>
                        <p><strong>Revenue Model:</strong> <br> {{ service.revenue_model }}</p>
                        <p><strong>Existing Technology:</strong> <br> {{ service.existing_technology }}</p>
                        <p><strong>Operational Challenges:</strong> <br> {{ service.operational_challenges }}</p>
                        <p><strong>Market Trends:</strong> <br> {{ service.market_trends }}</p>
                        <p><strong>Competitive Gap:</strong> <br> {{ service.competitive_gap }}</p>
                        <p><strong>Compliance Needs:</strong> <br> {{ service.compliance_needs }}</p>
                        <p><strong>Most Valuable Software Feature:</strong> <br> {{ service.most_valuable_software_feature.feature_name }}</p>
                        <p><strong>Feature Description:</strong> <br> {{ service.most_valuable_software_feature.feature_description }}</p>
                        <p><strong>Expected Benefits:</strong> <br> {{ service.most_valuable_software_feature.expected_benefits }}</p>
                        <p><strong>ROI Justification:</strong> <br> {{ service.most_valuable_software_feature.ROI_justification }}</p>
                        <div class="btn-grp mt-5">

                            <button class="proposal-button " style="margin-right: 0px;" @click="generateProposals"
                                :disabled="isGenerating">
                                {{ isGenerating ? 'Generating...' : 'Generate Proposal' }}
                            </button>
                            <button class="proposal-button" style="margin-right: 0px; " @click="sendEmail">
                                Send Mail
                            </button>
                            <button class="proposal-button" style="margin-right: 0px; " @click="openPreviewPopup">
                                Preview
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <PreviewPopup :visible="isPreviewPopupVisible" @close="closePreviewPopup" />

    </div>
</template>

<script>
import axios from 'axios';
import { useToast } from 'vue-toastification';
import PreviewPopup from './PreviewPopup.vue';
const toast = useToast();
export default {
    name: 'ServiceDetail',
    components: { PreviewPopup },

    data() {
        return {
            services: [],
            links: [],
            isLoading: true,
            activeTab: 'links',
            selectedLinks: [],
            selectedSections: [],
            sectionTitle: this.$route.query.sectionTitle || 'Section',
            sectionContent: this.$route.query.sectionContent || 'No Content Available',
            emailSend: '',
            analysisId: this.$route.query.analysisId,
            serviceId: this.$route.query.serviceId,

            isGenerating: false,
            isPreviewPopupVisible: false,
        }
    },

    async created() {
        try {
            this.isLoading = true;
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';
            const response = await axios.get(`${apiUrl}/analysis?id=${this.analysisId}`);
            this.services = response.data.analysis.allServices;
            // Get the serviceId from the route query and convert it to a number
            const serviceId = Number(this.$route.query.serviceId);

            // Filter services based on the serviceId
            this.services = response.data.analysis.allServices.filter(service => Number(service.id) === serviceId);
            this.emailSend = response.data.analysis.email;
            console.log("email:", response.data.analysis.email)
            console.log("services", response.data.analysis.allServices);
            console.log("links", response.data.analysis.links);


        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            this.isLoading = false;
        }
    },
   methods: {
        async generateProposals() {
            try {
                this.isGenerating = true;
                const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';
                const response = await axios.post(`${apiUrl}/proposals/generate-proposal`, {service: this.services[0]});
                console.log(response.data.data);
                console.log('Proposal generated successfully!');
                // toast.success('Proposal generated successfully!');
            } catch (error) {
                console.log('Failed to generate proposal.');
                // toast.error('Failed to generate proposal.');
            } finally {
                this.isGenerating = false;
            }
        },
        openPreviewPopup() {
            this.isPreviewPopupVisible = true;
        },
        closePreviewPopup() {
            this.isPreviewPopupVisible = false;
        },
        async sendEmail() {
            try {
                const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';
                const response = await axios.post(`${apiUrl}/email/send-email`,
                    {
                    to: this.emailSend,
                    }
                );
                console.log(response.data.message);
                toast.success('Email sent successfully!');
            } catch (error) {
                console.error('Error sending email:', error);
                toast.error('Failed to send email.');
            }
        },
    },

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
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
    border: 1px solid #e0e0e0;
}

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

/*
.service-content {
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

.btn-grp {
    display: flex;
    gap: 10px;
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
