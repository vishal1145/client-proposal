<template>
    <div class="min-h-screen bg-[#080B16]">
        <Navbar />
        <!-- Add a spacer div to account for fixed navbar -->
        <div class="md:h-[110px] h-[75px]"></div>

        <!-- Projects Section -->
        <section class="py-16">
            <div class="container mx-auto max-w-[1400px] relative z-10">
                <!-- Content Container with Same Margins as Contact -->
                <div class="mx-4 sm:mx-6 lg:mx-[180px]">
                    <div class="mb-12">
                        <p class="text-white text-6xl font-bold mb-8">Latest <span
                                class="text-[#CDFF6B]">Projects</span></p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-24">
                        <div class="grid gap-8">
                            <router-link to="#"
                                class="block group transition-transform duration-300 hover:-translate-y-2">
                                <div class="rounded-3xl overflow-hidden">
                                    <img src="../assets/project11.webp" alt="Mobile Application"
                                        class="object-cover rounded-3xl w-full h-[500px] transition-transform duration-300 group-hover:scale-105" />
                                </div>
                                <div class="mt-6">
                                    <p class="text-lg text-white mb-2">App Developments</p>
                                    <h3 class="text-2xl font-bold text-[#CDFF6B]">Mobile Application</h3>
                                </div>
                            </router-link>
                            <router-link to="#"
                                class="block group transition-transform duration-300 hover:-translate-y-2">
                                <div class="bg-[#FFF4EF] rounded-3xl overflow-hidden">
                                    <img src="../assets/project2.webp" alt="Poster Magazine"
                                        class="object-cover w-full h-[360px] transition-transform duration-300 group-hover:scale-105" />
                                </div>
                                <div class="mt-6">
                                    <p class="text-lg text-white mb-1">App Developments</p>
                                    <h3 class="text-2xl font-bold text-[#CDFF6B]">Poster Magazine</h3>
                                </div>
                            </router-link>
                        </div>

                        <div class="grid gap-8">
                            <!-- Bottle Designs -->
                            <router-link to="#"
                                class="block group transition-transform duration-300 hover:-translate-y-2 mt-14">
                                <div>
                                    <div class="mb-2">
                                        <p class="text-lg text-white mb-1">Graphic Design</p>
                                        <h3 class="text-2xl font-bold text-[#CDFF6B]">Bottle Designs</h3>
                                    </div>
                                    <div class="relative">
                                        <div class="relative h-[360px]">
                                            <img src="../assets/project10.webp" alt="Bottle Designs"
                                                class="object-cover rounded-3xl transition-transform duration-300 group-hover:scale-105 w-full h-full" />
                                        </div>
                                        <button
                                            class="bg-[#CDFF6B] hover:bg-[#CDFF6B]/90 text-[#080B16] text-lg font-medium px-4 py-2 rounded-full absolute bottom-6 left-6">
                                            View Details →
                                        </button>
                                    </div>
                                </div>
                            </router-link>

                            <!-- Shopping Bag Designs -->
                            <router-link to="#"
                                class="block group transition-transform duration-300 hover:-translate-y-2">
                                <div class="bg-[#F5F4FF] rounded-3xl overflow-hidden">
                                    <div class="relative h-[400px]">
                                        <img src="../assets/project4.webp" alt="Shopping Bag Designs"
                                            class="object-contain p-8 w-full h-full" />
                                    </div>
                                </div>
                                <div class="mt-6">
                                    <p class="text-lg text-white mb-1">Graphic Design</p>
                                    <h3 class="text-2xl font-bold text-[#CDFF6B]">Cray Bag Designs</h3>
                                </div>
                            </router-link>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-24 mt-8">
                        <!-- Web Application Project -->
                        <router-link to="#" class="block group transition-transform duration-300 hover:-translate-y-2">
                            <div class="rounded-xl overflow-hidden">
                                <div class="relative h-[500px] w-full flex items-center justify-center bg-gray-100">
                                    <img src="../assets/project6.webp" alt="Web Application" loading="lazy"
                                        decoding="async" class="object-contain h-full w-full" />
                                </div>
                            </div>
                            <div class="mt-6 ">
                                <p class="text-lg text-white mb-1">App Developments</p>
                                <h3 class="text-2xl font-bold text-[#CDFF6B]">Web Application</h3>
                            </div>
                        </router-link>

                        <!-- Mobile Application Project -->
                        <router-link to="#" class="block group transition-transform duration-300 hover:-translate-y-2">
                            <div class="rounded-3xl overflow-hidden">
                                <div class="relative h-[400px] bg-gray-50 flex items-center justify-center">
                                    <img src="../assets/project5.webp" alt="Mobile Application" loading="lazy"
                                        decoding="async" class="object-contain p-6 h-full w-full" />
                                </div>
                            </div>
                            <div class="mt-4">
                                <p class="text-lg text-white mb-1">Graphic Design</p>
                                <h3 class="text-2xl font-bold text-[#CDFF6B]">Cray Bag Designs</h3>
                            </div>
                        </router-link>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-24 mt-8">
                        <!-- Poster Magazine Project -->
                        <router-link to="#" class="block group transition-transform duration-300 hover:-translate-y-2">
                            <div class="rounded-3xl overflow-hidden">
                                <div class="relative h-[400px] bg-gray-100 flex items-center justify-center">
                                    <img src="../assets/project7.webp" alt="Poster Magazine" loading="lazy"
                                        decoding="async" class="object-contain p-6 h-full w-full" />
                                </div>
                            </div>
                            <div class="mt-4">
                                <p class="text-lg text-white mb-1">App Developments</p>
                                <h3 class="text-2xl font-bold text-[#CDFF6B]">Poster Magazine</h3>
                            </div>
                        </router-link>

                        <!-- Cray Bag Designs Project -->
                        <router-link to="#" class="block group transition-transform duration-300 hover:-translate-y-2">
                            <div class="rounded-3xl overflow-hidden">
                                <div class="relative h-[400px] bg-[#FFF1F3] flex items-center justify-center">
                                    <img src="../assets/project8.webp" alt="Cray Bag Designs" loading="lazy"
                                        decoding="async" class="object-contain p-6 h-full w-full" />
                                </div>
                            </div>
                            <div class="mt-4">
                                <p class="text-lg text-white mb-1">Graphic Design</p>
                                <h3 class="text-2xl font-bold text-[#CDFF6B]">Cray Bag Designs</h3>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </section>

        <!-- Add Contact component -->
        <Contact />

        <!-- Add ChatWidget component -->
        <ChatWidget />
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import ChatWidget from '../components/ChatWidget.vue'
import Contact from '../components/Contact.vue'

export default {
    name: 'recentProject',
    components: {
        Navbar,
        ChatWidget,
        Contact
    }
};
</script>

<style scoped>
/* Add any additional styling if needed */
</style>
