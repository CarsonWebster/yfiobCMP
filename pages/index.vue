<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
const authStore = useAuthStore();

</script>

<template>
    <div>
        <!-- <div v-if='authStore.isAuthenticated' >
            <home-view />
        </div>
        <div v-else >
            <p>No Auth! Haha!</p>
        </div> -->
        <!-- <p>Authenticated Index!</p> -->
        <home-view />
    </div>
    
</template>