<script setup lang="ts">
interface MessageCardProps {
  date?: string;
  content?: string;
  sending?: boolean;
}
const messageCardProps = defineProps<MessageCardProps>();
</script>

<template>
    <!-- <div class="flex items-center">
        <div v-if="sending" class="bg-[#5b50dd] text-white font-bold rounded-lg border shadow-lg p-10">
            <p>Message Content</p>
        </div>
        <div v-else class="bg-[#5b50dd] text-white font-bold rounded-lg border shadow-lg p-10">
            <p>Message Content</p>
        </div>
  </div> -->
  <div class="chat-message">
    <div v-if="sending" class="flex items-end">
      <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
          <div><span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">{{content}}</span></div>
      </div>
      <img src="https://api.lorem.space/image/face?hash=33791" alt="My profile" class="w-6 h-6 rounded-full order-1">
    </div>
    <div v-else class="flex items-end justify-end">
      <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
          <div><span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">{{content}}</span></div>
      </div>
      <img src="https://api.lorem.space/image/face?hash=80245" alt="My profile" class="w-6 h-6 rounded-full order-2">
    </div>
  </div>
</template>