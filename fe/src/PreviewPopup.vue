<template>
    <div v-if="visible" class="popup-overlay">
        <div class="popup-content scroll-container">
            <button class="close-button" @click="closePopup">X</button>
            <!-- <ProjectProposal /> -->
            <div v-html="htmlContent"></div>
        </div>
    </div>
</template>

<script>
// import ProjectProposal from './Project-Proposal.vue';
export default {
    name: 'PreviewPopup',
    // components: {
    //     ProjectProposal
    // },
    props: {
        visible: Boolean,
        htmlContent: String, // Accept the HTML content as a prop
    },
    emits: ['close'],
    methods: {
        closePopup() {
            this.$emit('close');
        },
    },
};
</script>

<style scoped>
.popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.popup-content {
    background: #f2f2f2;
    padding: 2rem;
    border-radius: 8px;
    width: 90%;
    max-width: 800px;
    position: relative;
}

.close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    color: #c6a54c;
}
/* .scroll-container {
    max-height: 100%;
    overflow-y: auto;
} */
 .scroll-container {
     max-height: 100%;
     overflow-y: auto;

     /* Hide scrollbar for Webkit browsers (Chrome, Safari) */
     scrollbar-width: none;
     /* Firefox */
     -ms-overflow-style: none;
     /* IE & Edge */
 }

 .scroll-container::-webkit-scrollbar {
     display: none;
     /* Hide scrollbar for Chrome, Safari, and Edge */
 }
</style>

