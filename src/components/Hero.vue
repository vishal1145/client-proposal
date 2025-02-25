<template>
    <div class="min-h-screen relative overflow-hidden bg-[#040B1C] px-4 sm:px-6 pt-20">
        <!-- Background Gradient -->
        <div class="absolute inset-0 bg-gradient-to-b from-[#040B1C] via-[#0A1A3B] to-[#040B1C]"></div>

        <!-- Top Blue Glow -->
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#080B16] blur-[130px]"></div>

        <!-- Center Green Glow -->
        <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#CDFF6B]/20 blur-[100px] rounded-full">
        </div>

        <!-- Bottom Blue Glows -->
        <div class="absolute bottom-0 w-full h-[400px] bg-[#1a237e]/20 blur-[100px]"></div>

        <!-- Radial Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-radial from-transparent via-[#040B1C]/50 to-[#040B1C]"></div>

        <!-- Content Container -->
        <div class="container mx-auto max-w-6xl relative z-10 pt-10">
            <!-- Introduction Section -->
            <div class="flex flex-col items-center text-center space-y-4 my-10 sm:my-20">
                <h1 class="text-white text-4xl sm:text-5xl md:text-7xl font-light tracking-wide">
                    I'm <span class="text-[#CDFF6B] font-medium italic">Vishal K. Gupta</span>
                </h1>
                <div class="flex flex-col items-center gap-2">
                    <div class="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                        <span
                            class="border border-[#1E2735] px-4 sm:px-8 py-2 sm:py-3 rounded-xl text-white text-3xl sm:text-4xl md:text-6xl font-semibold">
                            <span class="animate-slide-up">{{ currentTitle }}</span>
                        </span>
                        <span class="text-white text-3xl sm:text-4xl md:text-6xl font-semibold">Developer</span>
                    </div>
                </div>
            </div>

            <!-- Stats Cards Section -->
            <div class="relative w-full">
                <!-- Client Review Card -->
                <div class="hidden lg:block absolute -left-28 top-[15%] z-10">
                    <div
                        class="bg-[#1E2735]/90 p-6 sm:p-8 rounded-3xl w-[300px] sm:w-[340px] transform -rotate-[6deg] backdrop-blur-sm shadow-xl">
                        <div class="flex flex-col">
                            <div class="flex flex-col space-y-0">
                                <div class="flex flex-col -space-y-1">
                                    <p class="text-white text-2xl font-semibold -space-x-2 text-start">Client Review
                                        From</p>
                                    <div class="flex items-center">
                                        <p class="text-white text-2xl font-semibold">Australia</p>
                                        <span
                                            class="bg-[#8B5CF6] text-white px-2 py-0.5 rounded-md text-sm font-medium ml-2 translate-y-[1px]">5.0</span>
                                    </div>
                                </div>
                            </div>
                            <div class="text-gray-400/70 text-start mt-3 leading-relaxed">
                                <p>Outstanding Web Developer,</p>
                                <p class="mt-0">Exceeded All Expectations. Highly</p>
                                <p class="mt-0">Recommended Without Hesitation.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Profile Image Section -->
                <div class="flex justify-center">
                    <div class="relative">
                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400" alt="Profile"
                            class="w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] object-cover rounded-2xl" />
                        <div class="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#0B0F16]/50 to-transparent">
                        </div>
                    </div>
                </div>

                <!-- Expertise Card -->
                <div class="hidden lg:block absolute -right-28 top-[15%] z-10">
                    <div
                        class="bg-[#1E2735]/90 p-6 sm:p-8 rounded-3xl w-[300px] sm:w-[340px] transform rotate-[6deg] backdrop-blur-sm shadow-xl">
                        <div class="flex flex-col">
                            <p class="text-white text-2xl font-semibold text-start mb-8">MY EXPERTISE</p>

                            <div class="space-y-6">
                                <!-- Backend Skill -->
                                <div class="flex flex-col gap-2">
                                    <div class="flex items-center justify-between">
                                        <span class="text-white/90 text-sm font-medium">BACKEND</span>
                                        <div class="flex items-center gap-2">
                                            <div class="w-[150px] h-[3px] bg-[#1A1F2E] rounded-full overflow-hidden">
                                                <div class="h-full w-[88%] bg-[#CDFF6B] rounded-full"></div>
                                            </div>
                                            <span class="text-white/90 text-sm">88%</span>
                                        </div>
                                    </div>
                                </div>

                                <!-- CMS Skill -->
                                <div class="flex flex-col gap-2">
                                    <div class="flex items-center justify-between">
                                        <span class="text-white/90 text-sm font-medium">CMS</span>
                                        <div class="flex items-center gap-2">
                                            <div class="w-[150px] h-[3px] bg-[#1A1F2E] rounded-full overflow-hidden">
                                                <div class="h-full w-[90%] bg-[#CDFF6B] rounded-full"></div>
                                            </div>
                                            <span class="text-white/90 text-sm">90%</span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Frontend Skill -->
                                <div class="flex flex-col gap-2">
                                    <div class="flex items-center justify-between">
                                        <span class="text-white/90 text-sm font-medium">FRONTEND</span>
                                        <div class="flex items-center gap-2">
                                            <div class="w-[150px] h-[3px] bg-[#1A1F2E] rounded-full overflow-hidden">
                                                <div class="h-full w-[93%] bg-[#CDFF6B] rounded-full"></div>
                                            </div>
                                            <span class="text-white/90 text-sm">93%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Mobile Cards (Visible on smaller screens) -->
                <div class="lg:hidden mt-8 space-y-4">
                    <!-- Mobile Client Review Card -->
                    <div class="bg-[#1E2735]/90 p-6 rounded-3xl backdrop-blur-sm shadow-xl">
                        <div class="flex flex-col">
                            <div class="flex flex-col space-y-0">
                                <div class="flex flex-col -space-y-1">
                                    <p class="text-white text-2xl font-semibold -space-x-2 text-start">Client Review
                                        From</p>
                                    <div class="flex items-center">
                                        <p class="text-white text-2xl font-semibold">Australia</p>
                                        <span
                                            class="bg-[#8B5CF6] text-white px-2 py-0.5 rounded-md text-sm font-medium ml-2 translate-y-[1px]">5.0</span>
                                    </div>
                                </div>
                            </div>
                            <div class="text-gray-400/70 text-start mt-3 leading-relaxed">
                                <p>Outstanding Web Developer,</p>
                                <p class="mt-0">Exceeded All Expectations. Highly</p>
                                <p class="mt-0">Recommended Without Hesitation.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Mobile Expertise Card -->
                    <div class="bg-[#1E2735]/90 p-6 rounded-3xl backdrop-blur-sm shadow-xl">
                        <div class="flex flex-col">
                            <p class="text-white text-2xl font-semibold text-start mb-8">MY EXPERTISE</p>

                            <div class="space-y-6">
                                <!-- Backend Skill -->
                                <div class="flex flex-col gap-2">
                                    <div class="flex items-center justify-between">
                                        <span class="text-white/90 text-sm font-medium">BACKEND</span>
                                        <div class="flex items-center gap-2">
                                            <div class="w-[150px] h-[3px] bg-[#1A1F2E] rounded-full overflow-hidden">
                                                <div class="h-full w-[88%] bg-[#CDFF6B] rounded-full"></div>
                                            </div>
                                            <span class="text-white/90 text-sm">88%</span>
                                        </div>
                                    </div>
                                </div>

                                <!-- CMS Skill -->
                                <div class="flex flex-col gap-2">
                                    <div class="flex items-center justify-between">
                                        <span class="text-white/90 text-sm font-medium">CMS</span>
                                        <div class="flex items-center gap-2">
                                            <div class="w-[150px] h-[3px] bg-[#1A1F2E] rounded-full overflow-hidden">
                                                <div class="h-full w-[90%] bg-[#CDFF6B] rounded-full"></div>
                                            </div>
                                            <span class="text-white/90 text-sm">90%</span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Frontend Skill -->
                                <div class="flex flex-col gap-2">
                                    <div class="flex items-center justify-between">
                                        <span class="text-white/90 text-sm font-medium">FRONTEND</span>
                                        <div class="flex items-center gap-2">
                                            <div class="w-[150px] h-[3px] bg-[#1A1F2E] rounded-full overflow-hidden">
                                                <div class="h-full w-[93%] bg-[#CDFF6B] rounded-full"></div>
                                            </div>
                                            <span class="text-white/90 text-sm">93%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Projects Button -->
                <div class="hidden sm:block absolute bottom-10 left-1/2 -translate-x-1/2 transform w-full sm:w-auto">
                    <a @click.prevent="goToProjects"
                        class="w-full sm:w-auto bg-[#CDFF6B] text-[#0B0F16] px-8 py-3 rounded-full text-base sm:text-lg font-medium hover:bg-white transition-colors border border-[#0B0F16] inline-block text-center cursor-pointer">
                        MY PROJECTS
                    </a>
                </div>
                <div class="block sm:hidden pt-4">
                    <a @click.prevent="goToProjects"
                        class="w-full sm:w-auto bg-[#CDFF6B] text-[#0B0F16] px-8 py-3 rounded-full text-base sm:text-lg font-medium hover:bg-white transition-colors border border-[#0B0F16] inline-block text-center cursor-pointer">
                        MY PROJECTS
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Hero-component',
    data() {
        return {
            titles: ['Full Stack', 'Backend', 'Android', 'Frontend', 'React Native'],
            currentTitleIndex: 0,
            currentTitle: 'Full Stack'
        }
    },
    mounted() {
        this.startTitleRotation();
    },
    beforeUnmount() {
        if (this.titleInterval) {
            clearInterval(this.titleInterval);
        }
    },
    methods: {
        startTitleRotation() {
            this.titleInterval = setInterval(() => {
                this.currentTitleIndex = (this.currentTitleIndex + 1) % this.titles.length;
                this.currentTitle = this.titles[this.currentTitleIndex];
            }, 3000); // Change every 3 seconds
        },
        goToProjects() {
            this.$router.push('/recent-projects');
        }
    }
}
</script>

<style scoped>
.bg-gradient-radial {
    background-image: radial-gradient(circle at center,
            var(--tw-gradient-from) 0%,
            var(--tw-gradient-via) 50%,
            var(--tw-gradient-to) 100%);
}

.bg-gradient-to-b {
    background-size: 100% 100%;
    background-position: 0% 0%;
    background-repeat: no-repeat;
}

.bg-shine {
    background: linear-gradient(90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent);
    animation: shine 1.5s infinite;
}

@keyframes shine {
    0% {
        transform: translateX(-100%);
    }

    100% {
        transform: translateX(100%);
    }
}

.animate-slide-up {
    display: inline-block;
    animation: slideUp 3s infinite;
}

@keyframes slideUp {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }

    10% {
        opacity: 1;
        transform: translateY(0);
    }

    90% {
        opacity: 1;
        transform: translateY(0);
    }

    100% {
        opacity: 0;
        transform: translateY(-20px);
    }
}
</style>