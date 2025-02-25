<template>
    <section id="about" class=" bg-[#080B16] relative overflow-hidden py-20">
        <!-- Background Effects -->
        <div class="absolute inset-0 bg-gradient-radial from-[#1F2B64]/20 via-[#080B16] to-[#080B16]"></div>

        <!-- Main Content -->
        <div class="container mx-auto max-w-[1400px] relative z-10 px-4">
            <!-- Floating Images with Glow Effects -->
            <div class="absolute top-0 left-0 w-full h-full">
                <!-- Top Small Image -->
                <div class="absolute -top-[100px] left-[250px] rotate-[-30deg]  hidden sm:block">
                    <div class="absolute inset-0 w-[50px] h-[80px] bg-white/10 blur-[50px] rounded-[10px]"></div>
                    <img src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?w=400" alt="Developer"
                        class="relative w-[50px] h-[80px] rounded-[10px] object-cover shadow-[0_0_60px_rgba(255,255,255,0.3)] border border-white/20" />
                </div>

                <!-- Bottom Left Image -->
                <div class="absolute left-[100px] top-[150px] -rotate-[-10deg]  hidden sm:block">
                    <div class="absolute inset-0 w-[100px] h-[150px] bg-white/10 blur-[50px] rounded-[10px]"></div>
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400" alt="Developer"
                        class="relative w-[100px] h-[150px] rounded-[10px] object-cover shadow-[0_0_60px_rgba(255,255,255,0.3)] border border-white/20" />
                </div>

                <!-- Right Side Image -->
                <div class="absolute top-[20px] right-[150px] rotate-[-20deg] hidden sm:block">
                    <div class="absolute inset-0 w-[100px] h-[120px] bg-white/10 blur-[50px] rounded-[10px]"></div>
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" alt="Developer"
                        class="relative w-[90px] h-[120px] rounded-[10px] object-cover shadow-[0_0_60px_rgba(255,255,255,0.3)] border border-white/20" />
                </div>
            </div>

            <!-- Content -->
            <div class="text-center relative z-20 mt-[100px] ">
                <h2 class="text-[#CDFF6B] text-6xl font-bold mb-8">WHO AM I?</h2>

                <div class="md:max-w-[600px] mx-auto space-y-6 text-white/90">
                    <p class="text-lg">
                        I Am a full-stack website developer specialized in ReactJS. Plus, I
                        also know some WordPress front-end development with
                        Elementor and WooCommerce.
                    </p>

                    <p class="text-lg">
                        Programming is my passion, that's the reason I am working at the
                        time of my academic career.
                    </p>

                    <p class="text-lg">
                        Additionally, I like to play PC games and read story-type books in
                        my leisure time which is kinda fun and relaxing!
                    </p>
                </div>

                <a @click.prevent="goToProjects"
                    class="mt-12 bg-[#CDFF6B] hover:bg-[#CDFF6B]/90 text-[#080B16] px-4 py-4 rounded-full text-base font-medium transition-colors inline-block cursor-pointer">
                    SHOW MY PROJECTS
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'About-component',
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