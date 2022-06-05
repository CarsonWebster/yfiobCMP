<script lang="ts" setup>
import { ref } from 'vue';
import { User } from '@supabase/supabase-js';
import { useAuthStore } from '@/stores/auth';
const supabase = useSupabaseClient()
const { user } = useAuth()

const isSigningIn = ref(false);

const authStore = useAuthStore();

async function signIn() {
  try {
    isSigningIn.value = true;
    const { error } = await supabase.auth.signIn({ provider: 'google' });

    if (error) {
      throw error;
    }
  } catch (error) {
    console.error(error);
    alert('Something went wrong! Check the console for more details');
  } finally {
    isSigningIn.value = false;
  }
}
</script>

<template>
  <p v-if="isSigningIn">Please wait...</p>
  <button v-else @click="signIn">Sign in via Google</button>
</template>