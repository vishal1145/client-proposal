<template>
    <div class="bg-[#080B16] relative overflow-hidden py-20">
        <!-- Background Effects -->
        <div class="absolute inset-0 bg-gradient-radial from-[#1F2B64]/20 via-[#080B16] to-[#080B16]"></div>

        <!-- Main Content -->
        <div class="container mx-auto max-w-[1400px] relative z-10">
            <!-- Card Container -->
            <div
                class="bg-[#0B1221] rounded-[32px] py-8 sm:py-10 lg:py-12 px-4 sm:px-8 lg:px-20 border border-[#1E2A4A]/30 mx-4 sm:mx-6 lg:mx-[180px]">
                <!-- Title -->
                <h2
                    class="text-[#CDFF6B] text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-10 lg:mb-12">
                    ADDITIONAL SKILLS
                </h2>

                <!-- Skills Icons -->
                <div class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-6 sm:gap-8">
                    <!-- Bootstrap -->
                    <div class="group cursor-pointer hover:scale-110 transition-transform">
                        <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"
                            alt="Bootstrap" class="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
                    </div>

                    <!-- Axios -->
                    <div class="group cursor-pointer hover:scale-110 transition-transform">
                        <img src="https://user-images.githubusercontent.com/8939680/57233884-20344080-6fe5-11e9-8df3-0df1282e1574.png"
                            alt="Axios" class="h-8 sm:h-10 lg:h-12" />
                    </div>

                    <!-- Redux -->
                    <div class="group cursor-pointer hover:scale-110 transition-transform">
                        <img src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg"
                            alt="Redux" class="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
                    </div>

                    <!-- Material UI -->
                    <div class="group cursor-pointer hover:scale-110 transition-transform">
                        <img src="https://mui.com/static/logo.png" alt="Material UI"
                            class="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
                    </div>

                    <!-- Firebase -->
                    <div class="group cursor-pointer hover:scale-110 transition-transform">
                        <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="Firebase"
                            class="w-10 h-12 sm:w-14 sm:h-16 lg:w-16 lg:h-20" />
                    </div>

                    <!-- WordPress -->
                    <div class="group cursor-pointer hover:scale-110 transition-transform">
                        <img src="https://s.w.org/style/images/about/WordPress-logotype-standard.png" alt="WordPress"
                            class="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
                    </div>

                    <!-- Markdown -->
                    <div class="group cursor-pointer hover:scale-110 transition-transform">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg" alt="Markdown"
                            class="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AdditionalSkills-component'
}
</script>

<style scoped>
.bg-gradient-radial {
    background-image: radial-gradient(circle at 50% 0%, var(--tw-gradient-from) 0%, var(--tw-gradient-via) 40%, var(--tw-gradient-to) 100%);
}
</style>
