<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';

const {supabase} = useSupabase();
const authStore = useAuthStore();
authStore.loadUser();

supabase.auth.onAuthStateChange((event) => {
  if (event === 'SIGNED_IN') {
    authStore.loadUser();
  }
});
</script>

<template>
<div>
  <NuxtLayout v-if='authStore.isAuthenticated' name="default">
    <!-- <NuxtWelcome /> -->
    <NuxtPage />
  </NuxtLayout>
  <login-vue v-else />
</div>
  

</template>
