<template>
    <section id="contact" class="bg-[#080B16] relative overflow-hidden py-20">
        <!-- Background Effects -->
        <div class="absolute inset-0 bg-gradient-radial from-[#1F2B64]/20 via-[#080B16] to-[#080B16]"></div>

        <!-- Main Content -->
        <div class="mx-4 sm:mx-6 lg:mx-[180px] relative z-10">
            <!-- Contact Card -->
            <div class="bg-white rounded-[32px] p-6 sm:p-8 lg:p-12">
                <h2 class="text-[#080B16] text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-10">
                    LET'S HAVE A CHAT
                </h2>

                <!-- Contact Form -->
                <form @submit.prevent="handleSubmit" class="space-y-4 sm:space-y-6">
                    <!-- Name Input -->
                    <div>
                        <input type="text" placeholder="YOUR NAME"
                            class="w-full bg-[#F5F5F5] rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-[#080B16] placeholder-[#080B16]/60 focus:outline-none text-sm sm:text-base" />
                    </div>

                    <!-- Email Input -->
                    <div>
                        <input type="email" placeholder="EMAIL ADDRESS"
                            class="w-full bg-[#F5F5F5] rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-[#080B16] placeholder-[#080B16]/60 focus:outline-none text-sm sm:text-base" />
                    </div>

                    <!-- Message Input -->
                    <div>
                        <textarea placeholder="CHAT HERE" rows="4"
                            class="w-full bg-[#F5F5F5] rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-[#080B16] placeholder-[#080B16]/60 focus:outline-none resize-none text-sm sm:text-base"></textarea>
                    </div>

                    <!-- Submit Button -->
                    <button type="submit"
                        class="w-full bg-[#CDFF6B] hover:bg-[#CDFF6B]/90 text-[#080B16] py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold transition-colors">
                        SUBMIT HERE
                    </button>
                </form>

                <!-- Divider -->
                <div class="flex items-center my-8 sm:my-12">
                    <div class="flex-1 border-t-2 border-[#080B16]/10"></div>
                    <span class="px-4 text-[#080B16] text-sm sm:text-base font-semibold">OR</span>
                    <div class="flex-1 border-t-2 border-[#080B16]/10"></div>
                </div>

                <!-- Contact Information -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    <!-- Email -->
                    <div class="flex items-center space-x-4 sm:space-x-6">
                        <div
                            class="w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] bg-[#080B16] rounded-full flex items-center justify-center shadow-lg">
                            <i class="fas fa-envelope text-white text-xl sm:text-2xl"></i>
                        </div>
                        <div class="text-left">
                            <h3 class="text-[#080B16] font-semibold mb-1 text-sm sm:text-base">Email</h3>
                            <a href="mailto:vkgupta.dev@gmail.com"
                                class="text-gray-600 hover:text-[#CDFF6B] transition-colors text-sm sm:text-base break-all">
                                vkgupta.dev@gmail.com
                            </a>
                        </div>
                    </div>

                    <!-- Phone -->
                    <div class="flex items-center space-x-4 sm:space-x-6">
                        <div
                            class="w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] bg-[#080B16] rounded-full flex items-center justify-center shadow-lg">
                            <i class="fas fa-phone text-white text-xl sm:text-2xl"></i>
                        </div>
                        <div class="text-left">
                            <h3 class="text-[#080B16] font-semibold mb-1 text-sm sm:text-base">Phone</h3>
                            <a href="tel:+918743045170"
                                class="text-gray-600 hover:text-[#CDFF6B] transition-colors text-sm sm:text-base">
                                +91-8743045170
                            </a>
                        </div>
                    </div>

                    <!-- Address -->
                    <div class="flex items-center space-x-4 sm:space-x-6">
                        <div
                            class="w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] bg-[#080B16] rounded-full flex items-center justify-center shadow-lg">
                            <i class="fas fa-home text-white text-xl sm:text-2xl"></i>
                        </div>
                        <div class="text-left">
                            <h3 class="text-[#080B16] font-semibold mb-1 text-sm sm:text-base">Address</h3>
                            <p class="text-gray-600 text-sm sm:text-base">
                                C 104, Sector 65<br />
                                Noida, 201301<br />
                                India
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Contact-component',
    methods: {
        handleSubmit(e) {
            e.preventDefault();
            // Handle form submission logic here
            console.log('Form submitted');
        }
    }
}
</script>

<style scoped>
.bg-gradient-radial {
    background-image: radial-gradient(circle at 50% 0%, var(--tw-gradient-from) 0%, var(--tw-gradient-via) 40%, var(--tw-gradient-to) 100%);
}
</style>