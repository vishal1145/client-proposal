<template>
    <section id="projects" class="min-h-screen bg-[#080B16] relative overflow-hidden py-20">
        <!-- Background Effects -->
        <div class="absolute inset-0 bg-gradient-radial from-[#1F2B64]/20 via-[#080B16] to-[#080B16]"></div>

        <!-- Main Content -->
        <div class="container mx-auto max-w-[1600px] relative z-10 px-4 sm:px-6 lg:px-[180px]">
            <div class="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-0">
                <!-- Left Content -->
                <div class="w-full lg:max-w-[400px] mt-8 lg:mt-20">
                    <h2
                        class="text-white text-4xl sm:text-5xl lg:text-6xl text-center lg:text-start font-bold leading-[1.1] mb-8 lg:mb-16">
                        THE WORKS CLOSEST TO MY HEART
                    </h2>
                    <div class="relative lg:left-[70px] lg:top-20">
                        <a @click.prevent="goToProjects"
                            class="bg-[#CDFF6B] hover:bg-[#CDFF6B]/90 text-[#080B16] w-full lg:w-[380px] py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold transition-colors relative z-20 inline-block text-center cursor-pointer">
                            SHOW MY PROJECTS
                        </a>
                    </div>
                </div>

                <!-- Right Content - Project Cards -->
                <div
                    class="w-full lg:w-auto flex flex-col sm:flex-row items-center sm:items-start gap-4 relative z-10 mt-8 lg:mt-0">
                    <!-- Plumbing Project -->
                    <div
                        class="group relative w-full sm:w-[200px] lg:w-[230px] h-[400px] sm:h-[450px] lg:h-[500px] rounded-[32px] overflow-hidden cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1581141849291-1125c7b692b5?w=800"
                            alt="Plumbing Project" class="w-full h-full object-cover" />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                            <div class="absolute bottom-8 sm:bottom-10 left-8 sm:left-12 text-white">
                                <h3 class="text-xl sm:text-2xl font-bold mb-1">Plumbing</h3>
                                <p class="text-base sm:text-lg font-medium text-white/90">Company</p>
                            </div>
                        </div>
                    </div>

                    <!-- Product Project -->
                    <div
                        class="group relative w-full sm:w-[130px] lg:w-[150px] h-[400px] sm:h-[450px] lg:h-[500px] rounded-[32px] overflow-hidden cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800" alt="Product Project"
                            class="w-full h-full object-cover object-center" />

                    </div>

                    <!-- Architecture Project -->
                    <div
                        class="group relative w-full sm:w-[130px] lg:w-[150px] h-[400px] sm:h-[450px] lg:h-[500px] rounded-[32px] overflow-hidden cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1613390792897-aa0c06a52332?w=800"
                            alt="Architecture Project" class="w-full h-full object-cover object-center" />

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Projects-component',
    methods: {
        goToProjects() {
            // Navigate to recent projects page
            this.$router.push('/recent-projects');
        }
    }
}
</script>

<style scoped>
.bg-gradient-radial {
    background-image: radial-gradient(circle at 50% 0%, var(--tw-gradient-from) 0%, var(--tw-gradient-via) 40%, var(--tw-gradient-to) 100%);
}
</style>