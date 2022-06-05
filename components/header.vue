<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
const authStore = useAuthStore();
const { user, isLoggedIn, logout } = useAuth();


async function fullLogout() {
    authStore.clearUser()
    logout()
    console.log('Full log out, user: ')
    console.log(authStore.currentUser)
}
</script>

<template>
<div>
    <header v-if='isLoggedIn()' class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800">
    <div class="sm:flex sm:items-center sm:justify-between">
        <a href="home" class="flex items-center mb-4 sm:mb-0">
            <img src="@/assets/images/yfiobtran.png" class="mr-3 h-8" alt="YFIOB Logo" />
            <!-- <p class="mr-4 hover:underline md:mr-6 flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">Home</p> -->
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="/" class="mr-4 hover:underline md:mr-6 ">Home</a>
            </li>
            <li>
                <a href="/events" class="mr-4 hover:underline md:mr-6 ">Events</a>
            </li>
            <li>
                <a href="/messages" class="mr-4 hover:underline md:mr-6">Messages</a>
            </li>
            <li>
                <a href="/settings" class="mr-4 hover:underline md:mr-6 ">Account Settings</a>
            </li>
            <li>
                <a @click="fullLogout()" href="/" class="hover:underline">Sign-Out</a>
            </li>
        </ul>
    </div>
    </header>
</div>
</template>