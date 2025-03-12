<template>
    <div class="analysis-container">

        <div class="flex justify-between items-center mb-4 gap-4">
        </div>
        <div class="url">
            <h3>{{ url }} <span style="color: #666;
    line-height: 1.6;
    margin-bottom: 0.5rem;
    font-size: 16px;
    font-weight: 600;">({{ emailSend }})</span></h3>
        </div>
        <div class="tabs-container">
            <div class="header-container">
                <div class="tabs">
                    <button :class="['tab-button', { active: activeTab === 'links' }]" @click="activeTab = 'links'">
                        Service Details
                    </button>
                </div>
            </div>

            <div class="tab-content">

                <div v-if="services.length === 0" class="text-center text-gray-500 mt-4">
                    No records found
                </div>

                <div v-else v-for="(service, index) in services" :key="index" class="service-content">
                    <div class="service-section flex gap-4" style="padding: 0px;">
                        <div
                            style="width: 70%; border: 1px solid #e0e0e0; border-radius: 8px; padding: 1rem; height: 700px; overflow-y: auto; scrollbar-width: none; -ms-overflow-style: none; margin-bottom: 1rem;">
                            <p><strong class="service-heading">Business Summary:</strong> <br> {{
                                service.business_summary
                                }}</p>
                            <p><strong class="service-heading">Key Services:</strong> <br> {{ service.key_services }}
                            </p>
                            <p><strong class="service-heading">Target Audience:</strong> <br> {{ service.target_audience
                                }}
                            </p>
                            <p><strong class="service-heading">Revenue Model:</strong> <br> {{ service.revenue_model }}
                            </p>
                            <p><strong class="service-heading">Existing Technology:</strong> <br> {{
                                service.existing_technology }}</p>
                            <p><strong class="service-heading">Operational Challenges:</strong> <br> {{
                                service.operational_challenges }}</p>
                            <p><strong class="service-heading">Market Trends:</strong> <br> {{ service.market_trends }}
                            </p>
                            <p><strong class="service-heading">Competitive Gap:</strong> <br> {{ service.competitive_gap
                                }}
                            </p>
                            <p><strong class="service-heading">Compliance Needs:</strong> <br> {{
                                service.compliance_needs
                                }}</p>
                            <p><strong class="service-heading">Most Valuable Software Feature:</strong> <br> {{
                                service.most_valuable_software_feature.feature_name }}</p>
                            <p><strong class="service-heading">Feature Description:</strong> <br> {{
                                service.most_valuable_software_feature.feature_description }}</p>
                            <p><strong class="service-heading">Expected Benefits:</strong> <br> {{
                                service.most_valuable_software_feature.expected_benefits }}</p>
                            <p><strong class="service-heading">ROI Justification:</strong> <br> {{
                                service.most_valuable_software_feature.ROI_justification }}</p>

                        </div>
                        <div
                            style="width: 30%; padding: 1rem; height: 700px; overflow-y: auto; scrollbar-width: none; -ms-overflow-style: none; margin-bottom: 1rem;">
                            <div class="btn-grp">
                                <button class="proposal-button" style="margin-right: 0px; " :disabled="isGenerating"
                                    @click="generateProposals">
                                    {{ isGenerating ? 'Generating...' : 'Generate' }}
                                </button>

                                <button v-if="hasProposal" class="proposal-button" style="margin-right: 0px; "
                                    @click="openSendEmailPopup">
                                    Send
                                </button>

                                <button v-if="hasProposal" class="proposal-button" style="margin-right: 0px; "
                                    @click="openPreviewPopup">
                                    Preview
                                </button>
                            </div>
                            <button class="proposal-button" style="margin-right: 0px; margin-top: 1rem;"
                                @click="followUp">
                                Follow Up
                            </button>

                            <div class="email-history mt-4 " v-if="emailHistory.length>0">
                                <h3 class=" email-heading">Email Sent Details :</h3>
                                <ul>
                                    <li v-for="email in emailHistory" :key="email._id" class="my-3 "
                                        style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 1rem;">
                                        <p style="margin: 0px;"><strong class="email-heading">Subject:</strong> {{
                                            email.subject
                                            }}</p>
                                        <p style="margin: 0px;"><strong class="email-heading">Sent At:</strong> {{ new
                                            Date(email.timestamp).toLocaleString() }}
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <PreviewPopup :visible="isPreviewPopupVisible" :htmlContent="previewHtmlContent" @close="closePreviewPopup" />
        <!-- Send Email Popup -->
        <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
            <div class="bg-white rounded-lg p-6 shadow-xl w-full max-w-md">
                <h3 class="text-lg font-semibold">Send Email</h3>
                <input v-model="emailSubject" type="text" placeholder="Enter email subject"
                    class="w-full border rounded-lg p-2 mt-3" />
                <div class="mt-4 flex justify-end">
                    <button @click="closeSendEmailPopup" class="px-4 py-2 bg-gray-300 rounded-lg mr-2">Cancel</button>
                    <button @click="sendEmail" class="px-4 py-2 bg-blue-500 text-white rounded-lg">Send</button>
                </div>
            </div>
        </div>
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
            isLoading: true,
            activeTab: 'links',
            url: '',
            analysisId: this.$route.query.analysisId,
            serviceId: this.$route.query.serviceId,
            isGenerating: false,
            isPreviewPopupVisible: false,
            hasProposal: false,
            previewHtmlContent: '',
            emailSend: '',
            emailHistory: [],
            showModal: false,
            emailSubject: '',
        };
    },

    async created() {
        try {
            this.isLoading = true;
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';
            const response = await axios.get(`${apiUrl}/analysis?id=${this.analysisId}`);
            const serviceId = Number(this.$route.query.serviceId);
            this.url = response.data.analysis.url;
            this.services = response.data.analysis.allServices.filter(service => Number(service.id) === serviceId);
            this.emailSend = response.data.analysis.email;

            await this.checkExistingProposal();
            await this.fetchEmailHistory();
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            this.isLoading = false;
        }
    },
    methods: {
        async checkExistingProposal() {
            try {
                const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';
                const response = await axios.get(`${apiUrl}/email/get-proposal-email?serviceId=${this.serviceId}`);
                this.hasProposal = !!response.data.data;
            } catch (error) {
                console.error('Error checking proposal status:', error);
            }
        },

        async generateProposals() {
            try {
                this.isGenerating = true;
                const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';
                await axios.post(`${apiUrl}/proposals/generate-proposal`, { service: this.services[0] });
                toast.success('Proposal generated successfully!');
                this.hasProposal = true;
            } catch (error) {
                toast.error('Failed to generate proposal.');
            } finally {
                this.isGenerating = false;
            }
        },
        async fetchEmailHistory() {
            try {
                const response = await axios.get('http://localhost:9000/email/email-details');
                this.emailHistory = response.data.data.filter(email => email.serviceId === this.serviceId);
            } catch (error) {
                console.error('Error fetching email history:', error);
            }
        },
        async openPreviewPopup() {
            try {
                const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';
                const response = await axios.get(`${apiUrl}/email/get-proposal-email?serviceId=${this.serviceId}`);
                this.previewHtmlContent = response.data.data;
                this.isPreviewPopupVisible = true;
            } catch (error) {
                console.error('Error fetching proposal HTML:', error);
            }
        },

        closePreviewPopup() {
            this.isPreviewPopupVisible = false;
        },
        openSendEmailPopup() {
            this.showModal = true;
        },
        closeSendEmailPopup() {
            this.showModal = false;
            this.emailSubject = '';
        },
        // async sendEmail() {
        //     try {
        //         const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';
        //         await axios.post(`${apiUrl}/email/send-email`, {
        //             to: this.emailSend,
        //             serviceId: this.serviceId,
        //         });
        //         toast.success('Email sent successfully!');
        //     } catch (error) {
        //         toast.error('Failed to send email.');
        //     }
        // },
        async sendEmail() {
            // try {
            //     await axios.post('http://localhost:4000/api/email/send', {
            //         to: this.emailSend,
            //         subject: this.emailSubject,
            //         serviceId: this.serviceId,
            //     });
            try {
                    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';
                    await axios.post(`${apiUrl}/email/send-email`, {
                        to: this.emailSend,
                        serviceId: this.serviceId,
                        subject: this.emailSubject,
                    });
                toast.success('Email sent successfully!');
                this.closeSendEmailPopup();
            } catch (error) {
                toast.error('Failed to send email.');
            }
        },
        async followUp() {
            try {
                const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';
                await axios.post(`${apiUrl}/send/followup-email`, {
                    to: this.emailSend,
                    serviceId: this.serviceId,
                });
                toast.success('Followup email sent successfully!');
            } catch (error) {
                toast.error('Failed to send Followup email.');
            }
        },
    },
};
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

.url h3 {
    color: #2c3e50;
    margin-bottom: 1rem;
    font-size: 16px;
    font-weight: 600;
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

.email-heading {
    color: #2c3e50;
    margin-bottom: 0.5rem;
    font-size: 16px;
    font-weight: 600;
}

.service-heading {
    color: #2c3e50;
    margin-bottom: 0.5rem;
    font-size: 16px;
    font-weight: 600;
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
    /* border: 1px solid #e0e0e0; */
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
