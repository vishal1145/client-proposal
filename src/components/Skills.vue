<template>
    <section id="skills" class="bg-[#080B16] relative overflow-hidden py-20">
        <!-- Background Effects -->
        <div class="absolute inset-0 bg-gradient-radial from-[#1F2B64]/20 via-[#080B16] to-[#080B16]"></div>

        <!-- Main Content -->
        <div class="container mx-auto max-w-[1400px] relative z-10 pt-20">
            <!-- Content Container with Same Margins as Additional Skills -->
            <div class="mx-4 sm:mx-6 lg:mx-[180px]">
                <div class="text-center mb-12 sm:mb-16 lg:mb-24">
                    <h2 class="text-[#CDFF6B] text-4xl sm:text-5xl lg:text-7xl font-bold tracking-wide">MY SKILLS</h2>
                </div>

                <div class="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-6">
                    <!-- Skills Grid -->
                    <div
                        class="grid grid-cols-2  sm:grid-cols-3   md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                        <!-- HTML -->
                        <div
                            class="bg-[#151B26] w-[160px]  h-[200px]  rounded-2xl flex items-center justify-center hover:bg-[#151B26]/80 transition-colors cursor-pointer">
                            <img src="https://cdn.worldvectorlogo.com/logos/html-1.svg" alt="HTML5" class="w-16 h-16" />
                        </div>

                        <!-- CSS -->
                        <div
                            class="bg-[#151B26] w-[160px]  h-[200px] rounded-2xl flex items-center justify-center hover:bg-[#151B26]/80 transition-colors cursor-pointer">
                            <img src="https://cdn.worldvectorlogo.com/logos/css-3.svg" alt="CSS3" class="w-16 h-16" />
                        </div>

                        <!-- JavaScript -->
                        <div
                            class="bg-[#151B26] w-[160px] h-[200px] rounded-2xl flex items-center justify-center hover:bg-[#151B26]/80 transition-colors cursor-pointer">
                            <img src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg" alt="JavaScript"
                                class="w-16 h-16" />
                        </div>

                        <!-- React -->
                        <div
                            class="bg-[#151B26] w-[160px] h-[200px] rounded-2xl flex items-center justify-center hover:bg-[#151B26]/80 transition-colors cursor-pointer">
                            <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="React"
                                class="w-16 h-16" />
                        </div>

                        <!-- Next.js -->
                        <div
                            class="bg-[#151B26] w-[160px] h-[200px] rounded-2xl flex items-center justify-center hover:bg-[#151B26]/80 transition-colors cursor-pointer">
                            <img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" alt="Next.js"
                                class="w-16 h-16 invert" />
                        </div>

                        <!-- Node.js -->
                        <div
                            class="bg-[#151B26] w-[160px] h-[200px] rounded-2xl flex items-center justify-center hover:bg-[#151B26]/80 transition-colors cursor-pointer">
                            <img src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" alt="Node.js"
                                class="w-16 h-16" />
                        </div>

                        <!-- Tailwind -->
                        <div
                            class="bg-[#151B26] w-[160px] h-[200px] rounded-2xl flex items-center justify-center hover:bg-[#151B26]/80 transition-colors cursor-pointer">
                            <img src="https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" alt="Tailwind"
                                class="w-16 h-16" />
                        </div>

                        <!-- MongoDB -->
                        <div
                            class="bg-[#151B26] w-[160px] h-[200px] rounded-2xl flex items-center justify-center hover:bg-[#151B26]/80 transition-colors cursor-pointer">
                            <img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" alt="MongoDB"
                                class="w-16 h-16" />
                        </div>
                    </div>

                    <!-- Experience Card -->
                    <div
                        class="bg-[#151B26] w-full lg:w-[300px]  h-[425px] rounded-2xl flex flex-col items-center justify-center">
                        <div class="text-center">
                            <h3 class="text-white text-8xl font-bold mb-6">4</h3>
                            <div class="text-white text-5xl text-normal space-y-1">
                                <p>Years</p>
                                <p>Experience</p>
                                <p>Working</p>
                            </div>
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                                class="mt-8 bg-[#CDFF6B] hover:bg-[#CDFF6B]/90 text-[#080B16] px-10 py-2 rounded-full text-base font-medium inline-block">
                                DOWNLOAD MY CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Skills-component'
}
</script>

<style scoped>
.bg-gradient-radial {
    background-image: radial-gradient(circle at 50% 0%, var(--tw-gradient-from) 0%, var(--tw-gradient-via) 40%, var(--tw-gradient-to) 100%);
}
</style>