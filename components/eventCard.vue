<script setup lang="ts">

interface EventCardProps {
  eventTitle?: string;
  eventName?: string;
  eventLink?: string;
}
const eventCardProps = defineProps<EventCardProps>();
// const butt = { name: 'events', params: { eventname: 'bruh' } };
</script>

<template>
    <a :href='eventName'>
      <div class="w-auto h-16 items-center flex border-b-2">
          <!-- <h1 class="font-mono font-extrabold text-center text-2xl antialiased text-white">{{name}}</h1> -->
          <p>EventCard!</p>
          <p class="text-gray-400 text-opacity-90">{{eventTitle}}</p>
      </div>
    </a>
</template>
