<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import useSupabase from '~/composables/useSupabase'
const {supabase} = useSupabase();
const authStore = useAuthStore();

interface PostCardProps {
  title?: string;
  content?: string;
  author?: string;
  username?: string;
  avatarURL?: string;
}
const postCardprops = defineProps<PostCardProps>();

</script>

<template>
    <!-- component -->
    <!-- Background -->
<div class="bg-white dark:bg-black p-1 flex items-center justify-center">
    <!-- Padded Card -->
  <div class="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-800 p-4 border max-w-xl w-max">
    <!-- Card Header -->
    <div class="flex justify-between">
        <!-- Name and profile pic -->
      <div class="flex items-center">
          <!-- profile pic -->
        <!-- <img class="h-11 w-11 rounded-full" src="https://pbs.twimg.com/profile_images/1287562748562309122/4RLk5A_U_x96.jpg"/> -->
        <div class="avatar">
            <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
                <!-- <span>CW</span> -->
                <!-- <img src="https://api.lorem.space/image/face?hash=80245" /> -->
                <img :src='avatarURL' />
            </div>
        </div>
        <!-- Name and themes -->
        <div class="ml-1.5 text-sm leading-tight">
          <!-- <span class="text-black dark:text-white font-bold block">Carson Webster</span> -->
          <NuxtLink :to="'/mentor/' + username" >
          <span class="text-black dark:text-white font-bold block">{{author}}</span>
          </NuxtLink>
          <div class="">
            <!-- <span class="text-gray-500 dark:text-gray-400 font-normal block">Themes buttons</span> -->
            <!-- <button class="btn btn-primary btn-xs">Engineering</button>
            <button class="btn btn-primary btn-xs mx-1">Science</button> -->
          </div>
        </div>
      </div>
      <div class="">
        <!-- Post age text -->
        <p class="text-gray-400 text-opacity-90">5h ago</p>
        <!-- Heart and Bookmart -->
        <div class="flex">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
        </div>
      </div>
      
        
        
    </div>
    <!-- Card body -->
    <p class="text-black dark:text-white block text-xl leading-snug mt-3">{{content}}</p>
  </div>
</div>
</template>