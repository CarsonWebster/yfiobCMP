<script setup lang="ts">
interface PostCardProps {
  title?: string;
  content?: string;
  author?: string;
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
        <div class="avatar placeholder">
            <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
                <span>CW</span>
            </div>
        </div>
        <!-- Name and themes -->
        <div class="ml-1.5 text-sm leading-tight">
          <!-- <span class="text-black dark:text-white font-bold block">Carson Webster</span> -->
          <span class="text-black dark:text-white font-bold block">{{author}}</span>
          <div class="">
            <!-- <span class="text-gray-500 dark:text-gray-400 font-normal block">Themes buttons</span> -->
            <button class="btn btn-primary btn-xs">Engineering</button>
            <button class="btn btn-primary btn-xs mx-1">Science</button>
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
    <!-- <p class="text-black dark:text-white block text-xl leading-snug mt-3">This is an example of a text post any mentor can post. They can provide insightful information to students or provide links to helpful resources for careers and other info.</p> -->
    <p class="text-black dark:text-white block text-xl leading-snug mt-3">{{content}}</p>
    <!-- Card Image -->
    <img class="mt-2 rounded-2xl border border-gray-100 dark:border-gray-700" src="https://www.santacruzsbdc.org/wp-content/uploads/sites/4/2021/05/YFIOB-1024x607.jpg"/>
    <!-- time and date -->
    <!-- <p class="text-gray-500 dark:text-gray-400 text-base py-1 my-0.5">10:05 AM · Dec 19, 2020</p> -->
    <!-- Footer line -->
    <!-- <div class="border-gray-200 dark:border-gray-600 border border-b-0 my-1"></div> -->
    <!-- Footer data -->
    <!-- <div class="text-gray-500 dark:text-gray-400 flex mt-3">
        Heart and likes
      <div class="flex items-center mr-6">
        <svg class="fill-current h-5 w-auto" viewBox="0 0 24 24" style=""><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path></g></svg>
        <span class="ml-3">615</span>
      </div>
      Comments and people tweeting
      <div class="flex items-center mr-6">
        <svg class="fill-current h-5 w-auto" viewBox="0 0 24 24"><g><path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path></g></svg>
        <span class="ml-3">93 people are Tweeting about this</span>
      </div>
    </div> -->
  </div>
</div>
</template>