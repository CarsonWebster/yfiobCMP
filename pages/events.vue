<script setup lang="ts">

// import { useAuthStore } from '@/stores/auth';
import {useEventStore } from '@/stores/events'
// const authStore = useAuthStore();
const eventStore = useEventStore();
const events = await eventStore.fetchEvents()


</script>

<template>
    
    <!-- Page Container -->
    <div class="container mx-auto">
    <TitleCard title="Browse Events" />
    <!-- Two colulms -->
    <div class="flex flex-row flex-wrap py-4">
        <!-- Sidebar -->
        <aside class="w-full sm:w-1/3 md:w-1/4 px-2 border-r-4">
            <div class="sticky top-0 p-4 w-full">
                <!-- navigation -->
                <ul class="flex flex-col overflow-hidden">
                    <p class="font-mono text-xl text-[#5b50dd] py-6">Engage with #YFIOB</p>
                    <p class="font-mono text-xl border-b-2">Watch Past Events!</p>
                    <p class="font-mono text-xl border-b-2">Attend Upcoming Events</p>
                    <p class="font-mono text-xl border-b-2">Virtual Career Fair</p>
                </ul>
            </div>
        </aside>
        <!-- Main Content -->
        <main role="main" class="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
            <!-- content area -->
            <!-- Search Bar -->
            <input type="text" placeholder="Search Here" class="input input-bordered w-full max-w-xs" />
            <!-- Filters -->
            <div class="flex space-x-2 py-6">
                <p class="font-mono text-lg font-bold">Filters:</p>
                <button class="btn btn-xs">Location</button>
                <button class="btn btn-xs">Event Type</button>
                <button class="btn btn-xs">Age Range</button>
            </div>
            <!-- Results and List of Events -->
            <div class="flex space-x-2 py-6">
                <!-- <p class="font-mono text-lg font-bold inline-flex">Results:</p>
                <button class="btn btn-xs">Age Range</button>
                <button class="btn btn-xs">Age Range</button> -->
                <!-- <div class=" inline-flex ">
                    <p class="font-mono text-lg font-bold inline-flex">Results:</p>
                </div> -->
                <div class="inline-flex">
                    <!-- <h1>Hello</h1> -->
                    <p class="font-mono text-lg font-bold inline-flex pr-6">Results:</p>
                    <ul class="">
                        <!-- <li><button class="btn btn-xs">Age Range</button></li> -->
                        <li v-for="event in events" v-bind:key="event">
                            <a :href='event.name'>
                                <div class="w-auto h-16 items-center flex border-b-2">
                                    <p class="text-gray-400 text-opacity-90">{{event.title}}</p>
                                </div>
                            </a>
                        </li>
                        <!-- <li><EventCard name="College Cornicopia: April 2nd, 2022 from 3:00 to 5:00" /></li>
                        <li><EventCard name="Career Fair: April 7th, 2022 from 4:00 to 6:30" /></li>
                        <li><EventCard name="Roger Martinez speaks about future opportunites in tech! May 3rd via Zoom." /></li> -->
                        <!-- Page Nav Buttons -->
                        <div class="btn-group pt-20">
                            <input type="radio" name="options" data-title="1" class="btn" checked/>
                            <input type="radio" name="options" data-title="2" class="btn" />
                            <input type="radio" name="options" data-title="3" class="btn" />
                            <input type="radio" name="options" data-title="4" class="btn" />
                        </div>
                    </ul>
                </div>
            </div>
        </main>
    </div>
</div>
</template>