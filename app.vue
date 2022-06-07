<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
// import { useProfileStore } from '@/stores/profiles';
useHead({
  title: 'Community Mentorship Platform',
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'YFIOB Community Mentorship Platform', content: 'FIOB Community Mentorship Platform' }
  ]
})
const {supabase} = useSupabase();
const authStore = useAuthStore();
// const profileStore = useProfileStore();
// profileStore.fetchProfiles();
authStore.loadUser();
authStore.loadUserProfile();
// authStore.loadUserProfile();
// profileStore.fetchUserProfile();

// const profileStore = useProfileStore();
// const userProfile = await profileStore.fetchUserProfile()


supabase.auth.onAuthStateChange((event) => {
  if (event === 'SIGNED_IN') {
    authStore.loadUser();
    authStore.loadUserProfile();
  }
});

</script>

<template>
<div>
  <!-- <div v-if='authStore.isAuthenticated'> -->
  <p v-if="authStore.isDev" >User ID: {{authStore.getCurrentUserID}} </p>
    <!-- <account-creation v-if="!authStore.hasProfile" /> -->
    <NuxtLayout name="default">
      <!-- <NuxtWelcome /> -->
        <!-- <account-creation v-if="profileStore.hasProfile" /> -->
        <NuxtPage />
    </NuxtLayout>
  </div>
  <!-- <login-vue v-else /> -->

  

</template>
