<template>
    <div class="min-h-screen bg-[#080B16]">
        <Navbar />
        <!-- Add a spacer div to account for fixed navbar -->
        <div class=" md:h-[110px] h-[75px]"></div> <!-- This matches the navbar height -->
        <!-- Hero Section -->
        <!-- <div class="relative bg-[#F6F0E4] py-20 overflow-hidden">
            <div class="absolute left-0 top-1/3 -translate-y-1/2 z-10">
                <img src="../assets/hand.webp" alt="Hand with Rocket" class="w-auto h-auto" />
            </div>
            <div class="absolute right-20 top-1/2 -translate-y-1/2 z-10">
                <img src="../assets/message.webp" alt="Chat Bubble" class="w-auto h-auto" />
            </div>
            <div class="container mx-auto px-4 relative z-20 text-center max-w-2xl">
                <h1 class="text-4xl font-bold text-[#0B1B2B] mb-4">Our Recent Projects</h1>
                <div class="flex items-center justify-center gap-2 text-gray-600">
                    <span>Home</span>
                    <span>-</span>
                    <span>Our Projects</span>
                </div>
            </div>
            <div class="absolute top-0 left-1/4 z-10 opacity-30">
                <img src="../assets/decorative.webp" alt="Decorative Element" class="w-[100px] h-[100px]" />
            </div>
            <div class="absolute bottom-0 right-1/4 z-10 opacity-30">
                <img src="../assets/decorative.webp" alt="Decorative Element" class="w-[80px] h-[80px]" />
            </div>
        </div> -->

        <!-- Projects Section -->
        <section class="py-16">
            <div class="container mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-[180px]">
                <div class=" mb-12">
                    <p class="text-sm text-white/90 mb-3 text-start">Latest Updates</p>
                    <h2 class="text-2xl font-bold text-white text-start">
                        Explore Latest Recent <span class="text-[#CDFF6B]">Projects</span>.
                    </h2>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-24">
                    <div class="grid gap-8">
                        <router-link to="/projects/mobile-application"
                            class="block group transition-transform duration-300 hover:-translate-y-2">
                            <div class="rounded-3xl overflow-hidden">
                                <img src="../assets/project11.webp" alt="Mobile Application"
                                    class="object-cover rounded-3xl w-full h-[500px] transition-transform duration-300 group-hover:scale-105" />
                            </div>
                            <div class="mt-6">
                                <p class="text-sm text-white/90 mb-2">App Developments</p>
                                <h3 class="text-[22px] font-bold text-white">Mobile Application</h3>
                            </div>
                        </router-link>
                        <router-link to="/projects/poster-magazine"
                            class="block group transition-transform duration-300 hover:-translate-y-2">
                            <div class="bg-[#FFF4EF] rounded-3xl overflow-hidden">
                                <img src="../assets/project2.webp" alt="Poster Magazine"
                                    class="object-cover w-full h-[360px] transition-transform duration-300 group-hover:scale-105" />
                            </div>
                            <div class="mt-6">
                                <p class="text-sm text-white/90 mb-1">App Developments</p>
                                <h3 class="text-[22px] font-bold text-white">Poster Magazine</h3>
                            </div>
                        </router-link>
                    </div>

                    <div class="grid gap-8">
                        <!-- Bottle Designs -->
                        <router-link to="/projects/bottle-designs"
                            class="block group transition-transform duration-300 hover:-translate-y-2 mt-14">
                            <div>
                                <div class="mb-2">
                                    <p class="text-sm text-white/90 mb-1">Graphic Design</p>
                                    <h3 class="text-[22px] font-bold text-white">Bottle Designs</h3>
                                </div>
                                <div class="relative">
                                    <div class="relative h-[360px]">
                                        <img src="../assets/project10.webp" alt="Bottle Designs"
                                            class="object-cover rounded-3xl transition-transform duration-300 group-hover:scale-105 w-full h-full" />
                                    </div>
                                    <button
                                        class="bg-[#0561FC] text-white text-sm font-medium px-4 py-2 rounded-full absolute bottom-6 left-6">
                                        View Details →
                                    </button>
                                </div>
                            </div>
                        </router-link>

                        <!-- Shopping Bag Designs -->
                        <router-link to="/projects/shopping-bag"
                            class="block group transition-transform duration-300 hover:-translate-y-2">
                            <div class="bg-[#F5F4FF] rounded-3xl overflow-hidden">
                                <div class="relative h-[400px]">
                                    <img src="../assets/project4.webp" alt="Shopping Bag Designs"
                                        class="object-contain p-8 w-full h-full" />
                                </div>
                            </div>
                            <div class="mt-6">
                                <p class="text-sm text-white/90 mb-1">Graphic Design</p>
                                <h3 class="text-[22px] font-bold text-white">Cray Bag Designs</h3>
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-24 mt-8">
                    <!-- Web Application Project -->
                    <router-link to="/projects/web-application"
                        class="block group transition-transform duration-300 hover:-translate-y-2">
                        <div class="rounded-xl overflow-hidden">
                            <div class="relative h-[500px] w-full flex items-center justify-center bg-gray-100">
                                <img src="../assets/project6.webp" alt="Web Application" loading="lazy" decoding="async"
                                    class="object-contain h-full w-full" />
                            </div>
                        </div>
                        <div class="mt-6 text-left">
                            <p class="text-sm text-white/90 mb-1">App Developments</p>
                            <h3 class="text-[22px] font-bold text-white">Web Application</h3>
                        </div>
                    </router-link>

                    <!-- Mobile Application Project -->
                    <router-link to="/projects/mobile-application-2"
                        class="block group transition-transform duration-300 hover:-translate-y-2">
                        <div class="rounded-3xl overflow-hidden">
                            <div class="relative h-[400px] bg-gray-50 flex items-center justify-center">
                                <img src="../assets/project5.webp" alt="Mobile Application" loading="lazy"
                                    decoding="async" class="object-contain p-6 h-full w-full" />
                            </div>
                        </div>
                        <div class="mt-4">
                            <p class="text-sm text-white/90 mb-1">Graphic Design</p>
                            <h3 class="text-[22px] font-bold text-white">Cray Bag Designs</h3>
                        </div>
                    </router-link>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-24 mt-8">
                    <!-- Poster Magazine Project -->
                    <router-link to="/projects/poster-magazine-2"
                        class="block group transition-transform duration-300 hover:-translate-y-2">
                        <div class="rounded-3xl overflow-hidden">
                            <div class="relative h-[400px] bg-gray-100 flex items-center justify-center">
                                <img src="../assets/project7.webp" alt="Poster Magazine" loading="lazy" decoding="async"
                                    class="object-contain p-6 h-full w-full" />
                            </div>
                        </div>
                        <div class="mt-4">
                            <p class="text-sm text-white/90 mb-1">App Developments</p>
                            <h3 class="text-[22px] font-bold text-white">Poster Magazine</h3>
                        </div>
                    </router-link>

                    <!-- Cray Bag Designs Project -->
                    <router-link to="/projects/cray-bag"
                        class="block group transition-transform duration-300 hover:-translate-y-2">
                        <div class="rounded-3xl overflow-hidden">
                            <div class="relative h-[400px] bg-[#FFF1F3] flex items-center justify-center">
                                <img src="../assets/project8.webp" alt="Cray Bag Designs" loading="lazy"
                                    decoding="async" class="object-contain p-6 h-full w-full" />
                            </div>
                        </div>
                        <div class="mt-4">
                            <p class="text-sm text-white/90 mb-1">Graphic Design</p>
                            <h3 class="text-[22px] font-bold text-white">Cray Bag Designs</h3>
                        </div>
                    </router-link>
                </div>
                <div className="flex items-center justify-center gap-2 mt-12">
                    <button className="w-3 h-3 rounded-full bg-[#0561FC]" />
                    <button className="w-2 h-2 rounded-full bg-gray-300" />
                    <button className="w-2 h-2 rounded-full bg-gray-300" />
                    <button className="w-2 h-2 rounded-full bg-gray-300" />
                    <button className="w-2 h-2 rounded-full bg-gray-300" />
                    <button className="w-2 h-2 rounded-full bg-gray-300" />
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
    name: 'recentProject',
    components: {
        Navbar
    }
};
</script>

<style scoped>
/* Add any additional styling if needed */
</style>
