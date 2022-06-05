<script setup lang="ts">
// props: ['title']

interface TitleCardProps {
  title?: string;
}
const titleCardProps = defineProps<TitleCardProps>();
</script>

<template>
    <div class="bg-[#5b50dd] w-auto h-20 flex justify-center items-center">
        <h1 class="font-mono font-extrabold text-center text-2xl antialiased text-white">{{title}}</h1>
    </div>
</template>
