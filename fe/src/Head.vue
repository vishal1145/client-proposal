<template>
    <div class="flex justify-between items-center gap-4 bg-gray-100 border-b border-gray-300 py-4 px-6 shadow-sm">
        <div class="flex items-center gap-2">
            <router-link to="/" class="flex items-center gap-2">
                <img src="https://algofolks.com/images/logo2.webp" alt="Business Proposal" class="w-10 h-10 rounded-md">
                <div class="text-2xl font-semibold text-indigo-600 hover:text-indigo-700">
                    Analysis
                </div>
            </router-link>
        </div>
        <button
            class="inline-flex items-center px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-md"
            @click="logout"
        >
            Logout
        </button>
    </div>
</template>

<script>
export default {
    methods: {
        logout() {
            console.log('User logged out');
        }
    }
};
</script>
