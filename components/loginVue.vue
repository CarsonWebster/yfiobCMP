<script setup lang='ts'>
import { useAuthStore } from '@/stores/auth';
const supabase = useSupabaseClient()

const isSigningIn = ref(false);

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
    <div>
        <main>
            <!-- <div class="p-16 flex justify-center items-center mb-4 sm:mb-0">
                <img src="@/assets/images/yfiobtran.png" class="w-auto h-20" alt="YFIOB Logo" />
            </div>
            <div class="bg-[#5b50dd] w-auto h-auto flex justify-center items-center">
                <h1 class="p-12 font-mono font-extrabold text-center text-5xl antialiased text-white">Community Mentorship Platform</h1>
            </div> -->
            <!-- <div class="bg-[#5b50dd] w-auto h-auto flex justify-center items-center">
                <h1 class="p-12 font-mono font-extrabold text-center text-5xl antialiased text-white">Account Creation</h1>
            </div> -->
            <div class="w-auto h-auto flex justify-center items-center">
                <h1 class="p-12 font-mono font-extrabold text-center text-5xl antialiased text-[#5b50dd]">Create your account here </h1>
            </div>
            <div class="w-auto h-auto flex justify-center items-center">
                <!-- <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs border-black border-2" /> -->
                <p v-if="isSigningIn">Please wait...</p>
                <button v-else @click="signIn()" type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                    <svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                    Sign in with Google
                </button>
            </div>
        </main>
    </div>
</template>