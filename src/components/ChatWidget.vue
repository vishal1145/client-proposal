<template>
    <div class="fixed bottom-10 right-10 z-50 flex flex-col items-end space-y-3 group">
        <!-- Chat Options (visible when hovered) -->
        <div class="hidden group-hover:flex flex-col-reverse gap-2.5 mb-2 animate-fadeIn">
            <!-- Contact Form -->
            <div class="flex items-center flex-row-reverse cursor-pointer">
                <a href="#contact"
                    class="bg-[#0288d1] w-[60px] h-[60px] rounded-full shadow-md flex items-center justify-center hover:bg-[#0277bd] transition-colors">
                    <i class="fas fa-comment-alt text-white text-[26px]"></i>
                </a>
                <span class="bg-[#3A3A3A] text-gray-100 px-4 py-1.5 rounded text-[13px] font-medium shadow-md mr-2">
                    Contact Form
                </span>
            </div>

            <!-- WhatsApp Button -->
            <div class="flex items-center flex-row-reverse cursor-pointer">
                <a href="https://wa.me/918743045170" target="_blank" rel="noopener noreferrer"
                    class="bg-[#0288d1] w-[60px] h-[60px] rounded-full shadow-md flex items-center justify-center hover:bg-[#0277bd] transition-colors">
                    <img src="https://vkgupta.dev/images/whatsapp.png" alt="WhatsApp Logo"
                        class="w-[30px] h-[30px] object-contain" />
                </a>
                <span class="bg-[#3A3A3A] text-gray-100 px-4 py-1.5 rounded text-[13px] font-medium shadow-md mr-2">
                    Connect on Whatsapp
                </span>
            </div>

            <!-- Skype Button -->
            <div class="flex items-center flex-row-reverse cursor-pointer">
                <a href="skype:vkgupta.dev?chat" target="_blank" rel="noopener noreferrer"
                    class="bg-[#0288d1] w-[60px] h-[60px] rounded-full shadow-md flex items-center justify-center hover:bg-[#0277bd] transition-colors">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Skype_logo_%282019%E2%80%93present%29.svg/1200px-Skype_logo_%282019%E2%80%93present%29.svg.png"
                        alt="Skype Logo" class="w-[30px] h-[30px] object-contain" />
                </a>
                <span class="bg-[#3A3A3A] text-gray-100 px-4 py-1.5 rounded text-[13px] font-medium shadow-md mr-2">
                    Connect to Skype
                </span>
            </div>

            <!-- Email Button -->
            <div class="flex items-center flex-row-reverse cursor-pointer">
                <a href="mailto:vkgupta.dev@gmail.com"
                    class="bg-[#0288d1] w-[60px] h-[60px] rounded-full shadow-md flex items-center justify-center hover:bg-[#0277bd] transition-colors">
                    <i class="fas fa-envelope text-white text-[26px]"></i>
                </a>
                <span class="bg-[#3A3A3A] text-gray-100 px-4 py-1.5 rounded text-[13px] font-medium shadow-md mr-2">
                    Send an Email
                </span>
            </div>
        </div>

        <!-- Main Chat Button -->
        <div
            class="bg-[#dc2626] w-[60px] h-[60px] rounded-full shadow-lg flex items-center justify-center hover:bg-[#b91c1c] transition-colors duration-200 cursor-pointer">
            <i class="fas fa-comments text-white text-[26px]"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ChatWidget'
}
</script>

<style scoped>
.animate-fadeIn {
    animation: fadeIn 0.2s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>