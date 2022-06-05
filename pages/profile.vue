<script lang="ts" setup>

import { User } from '@supabase/supabase-js';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();
console.log('requesting currentUser')
console.log(authStore.currentUser)

// const { user_metadata } = authStore.currentUser.user_metadata as User;
// const { avatar_url, user_name } = user_metadata;
// const avatarAltText = `${user_name}'s avatar`;
</script>

<template>
  <!-- <h1>{{ user_name }}</h1> -->
  <!-- <img :src="avatar_url" :alt="avatarAltText" /> -->
  <NuxtLink to="/">
    <p>Take me back home</p>
  </NuxtLink>
</template>