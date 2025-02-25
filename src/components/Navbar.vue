<template>
    <nav class="bg-[#080B16] px-4 sm:px-6 py-4 fixed top-0 left-0 right-0 z-20">
        <!-- <div class="absolute inset-0 bg-gradient-radial from-[#1F2B64]/20 via-[#080B16] to-[#080B16]"></div> -->
        <div class="container mx-auto max-w-6xl flex items-center justify-between">
            <!-- Logo Section -->
            <div class="flex items-center">
                <a @click.prevent="goToHome" class="cursor-pointer">
                    <img :src="logo" alt="Reactive Logo" class="w-12 h-12 object-contain" />
                </a>
            </div>

            <!-- Mobile Menu Button -->
            <button @click="toggleMenu" class="lg:hidden text-white">
                <i class="fas fa-bars text-2xl"></i>
            </button>

            <!-- Navigation Links - Desktop -->
            <div class="hidden lg:flex flex-1 items-center justify-center space-x-12">
                <a v-for="link in navLinks" :key="link.name" @click.prevent="handleNavigation(link)"
                    class="text-white hover:text-[#CDFF6B] transition-colors text-sm font-medium tracking-wider cursor-pointer">
                    {{ link.name }}
                </a>
            </div>

            <!-- Contact Button - Desktop -->
            <div class="hidden lg:flex items-center">
                <a @click.prevent="handleNavigation({ section: 'contact', name: 'CONTACT' })"
                    class="group relative text-white px-6 py-2 rounded-full flex items-center text-sm font-medium hover:text-[#CDFF6B] transition-colors border border-[#1E2735] cursor-pointer">
                    <span class="mr-8">CONTACT</span>
                    <div
                        class="absolute right-0.5 w-8 h-8 bg-[#CDFF6B] rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#0B0F16] rotate-[135deg]"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </div>
                </a>
            </div>

            <!-- Mobile Menu -->
            <div v-if="isMenuOpen"
                class="lg:hidden fixed inset-0 bg-[#080B16] z-50 flex flex-col items-center justify-center">
                <button @click="toggleMenu" class="absolute top-6 right-6 text-white">
                    <i class="fas fa-times text-2xl"></i>
                </button>

                <div class="flex flex-col items-center space-y-8">
                    <a v-for="link in navLinks" :key="link.name" :href="link.href"
                        @click="handleNavigation(link); toggleMenu();"
                        class="text-white hover:text-[#CDFF6B] transition-colors text-xl font-medium tracking-wider">
                        {{ link.name }}
                    </a>

                    <a href="/#contact"
                        @click="handleNavigation({ section: 'contact', name: 'CONTACT' }); toggleMenu();"
                        class="bg-[#CDFF6B] text-[#0B0F16] px-8 py-3 rounded-full text-lg font-medium mt-4">
                        CONTACT
                    </a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import logo from '@/assets/logo.png'
</script>

<script>
export default {
    name: 'Navbar-component',
    data() {
        return {
            isMenuOpen: false,
            navLinks: [
                { name: 'ABOUT ME', section: 'about', href: '/#about' },
                { name: 'SKILLS', section: 'skills', href: '/#skills' },
                { name: 'AWARDS', section: 'awards', href: '/#awards' },
                { name: 'PROJECTS', section: 'projects', href: '/#projects' }
            ]
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        goToHome() {
            if (this.$route.path !== '/') {
                this.$router.push('/').then(() => {
                    setTimeout(() => {
                        this.scrollToTop();
                    }, 100);
                });
            } else {
                this.scrollToTop();
            }
        },
        handleNavigation(link) {
            if (this.$route.path !== '/') {
                this.$router.push('/').then(() => {
                    setTimeout(() => {
                        this.scrollToSection(link.section);
                    }, 100);
                });
            } else {
                this.scrollToSection(link.section);
            }

            if (this.isMenuOpen) {
                this.toggleMenu();
            }
        },
        scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    },
    mounted() {
        if (window.location.hash) {
            const sectionId = window.location.hash.slice(1);
            this.$nextTick(() => {
                this.scrollToSection(sectionId);
            });
        }
    }
}
</script>

<style scoped>
/* We can remove this style block since we're using group-hover directly in the template */
</style>