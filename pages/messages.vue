<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
// import {useProfileStore } from '@/stores/profiles'
// const profileStore = useProfileStore();
// const profiles = await profileStore.fetchProfiles();
// const userProfile = await profileStore.fetchUserProfile();
// console.log('New profiles', profiles)
// console.log('userProfile: ', userProfile)
// console.log('hasProfile: ', profileStore.hasProfile)
let mentors = ["Karim Benzema", "Ted Mosby", "Lily Aldrin","Robin Scherbatsky"];

</script>

<template>
<div>
<title-card title="Messages" />
<!-- Page Container -->
<div class="mx-auto">
    <!-- Two colulms -->
    <div class="flex flex-row flex-wrap py-4">
        <!-- Sidebar -->
        <aside class="w-full sm:w-1/3 md:w-1/4 px-2 bg-black">
            <div class="sticky top-0 p-4 w-full">
                <!-- navigation -->
                <ul class="flex flex-col overflow-hidden">
                    <p class="font-mono text-xl py-6 text-white">Mentors</p>
                    <div v-for="mentor in mentors" v-bind:key="mentor" class="flex items-center flex-inline py-4 border-b-2 border-gray-400 rounded-sm">
                        <div class="avatar placeholder pr-6">
                            <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
                                <span></span>
                            </div>
                        </div>
                        <p class="text-white justify-center text-center">{{mentor}}</p>
                    </div>
                </ul>
            </div>
        </aside>
        <!-- Main Content -->
        <main role="main" class="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
            <!-- content area -->
            <!-- <div class="container mx-auto">
                <div class="flex justify-center">
                    <p class="text-gray-400 text-opacity-90">Tuesday, March 2nd 2022</p>
                </div>
                <message-card class="p-10" />
            </div> -->
            <div id="messages" class="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                <message-card :sending=false content="Hello dude!" />
                <message-card :sending=true content="Hey there!" />
            </div>
        </main>
    </div>
</div>
</div>

</template>