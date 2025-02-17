<template>
    <section id="awards" class="bg-[#080B16] relative overflow-hidden py-20">
        <!-- Background Effects -->
        <div class="absolute inset-0 bg-gradient-radial from-[#1F2B64]/20 via-[#080B16] to-[#080B16]"></div>

        <!-- Main Content -->
        <div class="container mx-auto max-w-[1400px] relative z-10">
            <!-- Content Container with Same Margins as Additional Skills -->
            <div class="mx-4 sm:mx-6 lg:mx-[180px]">
                <div class="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-0">
                    <!-- Heading Section -->
                    <div class="max-w-[500px] w-full">
                        <h2
                            class="text-white text-4xl sm:text-5xl lg:text-6xl text-center lg:text-start font-bold leading-[1.1] mb-6">
                            AWARDS & <br />ACHIEVEMENTS
                        </h2>
                        <p class="text-white/80 text-base sm:text-lg text-center lg:text-start">
                            We have honored for our outstanding achievements in mobile app development
                            and web with our Outstanding Work. We're proud to Showcase them.
                        </p>
                    </div>

                    <!-- Awards Grid -->
                    <div class="w-full lg:w-auto lg:ml-20">
                        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-x-3 relative">
                            <!-- First Column -->
                            <div class="flex items-center justify-center lg:justify-start">
                                <div
                                    class="bg-white rounded-lg border-[6px] border-[#1E5DB0] shadow-lg w-[100px] sm:w-[120px] lg:w-[135px] h-[140px] sm:h-[150px] lg:h-[160px]">
                                    <img src="https://www.topdevelopers.co/badges/rank-badge.webp"
                                        alt="Top Developer Badge" class="w-full h-full object-contain p-2" />
                                </div>
                            </div>

                            <!-- Second Column -->
                            <div class="flex flex-col gap-y-4 lg:gap-y-3">
                                <div class="flex justify-center lg:justify-start">
                                    <div
                                        class="bg-white rounded-lg border-[6px] border-[#1E5DB0] shadow-lg w-[100px] sm:w-[120px] lg:w-[135px] h-[140px] sm:h-[150px] lg:h-[160px]">
                                        <img src="https://cdn.worldvectorlogo.com/logos/android-logomark.svg"
                                            alt="Android Developer Certificate"
                                            class="w-full h-full object-contain p-2" />
                                    </div>
                                </div>
                                <div class="flex justify-center lg:justify-start">
                                    <div
                                        class="bg-white rounded-lg border-[6px] border-[#1E5DB0] shadow-lg w-[100px] sm:w-[120px] lg:w-[135px] h-[140px] sm:h-[150px] lg:h-[160px]">
                                        <img src="https://www.applancer.co/assets/images/applancer.png"
                                            alt="Applancer Badge" class="w-full h-full object-contain p-2" />
                                    </div>
                                </div>
                            </div>

                            <!-- Third Column -->
                            <div class="flex flex-col gap-y-4 lg:gap-y-3 relative lg:bottom-20">
                                <div class="flex justify-center lg:justify-start">
                                    <div
                                        class="bg-white rounded-lg border-[6px] border-[#1E5DB0] shadow-lg w-[100px] sm:w-[120px] lg:w-[135px] h-[140px] sm:h-[150px] lg:h-[160px]">
                                        <img src="https://manta.com/blog/wp-content/uploads/2022/10/manta-logo-blue.png"
                                            alt="Manta Recognition" class="w-full h-full object-contain p-2" />
                                    </div>
                                </div>
                                <div class="flex justify-center lg:justify-start">
                                    <div
                                        class="bg-white rounded-lg border-[6px] border-[#1E5DB0] shadow-lg w-[100px] sm:w-[120px] lg:w-[135px] h-[140px] sm:h-[150px] lg:h-[160px]">
                                        <img src="https://www.topdevelopers.co/badges/mobile-app.png"
                                            alt="Top Mobile App Developer" class="w-full h-full object-contain p-2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Decorative Elements -->
        <div class="absolute top-20 left-40 w-2 h-2 bg-white/20 rounded-full hidden lg:block"></div>
        <div class="absolute bottom-40 right-60 w-3 h-3 bg-white/10 rounded-full hidden lg:block"></div>
    </section>
</template>

<script>
export default {
    name: 'Awards-component',
    methods: {
        scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                window.history.pushState({}, '', `/#${sectionId}`);
            }
        }
    }
}
</script>

<style scoped>
.bg-gradient-radial {
    background-image: radial-gradient(circle at 50% 0%, var(--tw-gradient-from) 0%, var(--tw-gradient-via) 40%, var(--tw-gradient-to) 100%);
}
</style>