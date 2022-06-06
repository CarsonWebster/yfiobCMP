<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import {usePostStore } from '@/stores/posts'
const authStore = useAuthStore();
const postStore = usePostStore();
const posts = await postStore.fetchPosts();

function usertest() {
    console.log('User Testing')
    console.log('authStore.hasProfile', authStore.hasProfile)
}


</script>

<template>
    <div>
        <TitleCard title="Community Mentorship Platform" />
        <div class="w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap py-4 flex-grow">
            <!-- fixed-width -->
            <div class="w-fixed w-full flex-shrink flex-grow-0 px-4">
                <div class="sticky top-0 p-4 w-full h-full">
                    <!-- leftside goes here -->
                    <!-- <FilterBox /> -->
                    <!-- <button @click='createPost' class=" w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Create Post</button> -->
                    <label for="createpost-modal" class="btn modal-button">Create Post</label>
                    <button @click='usertest' class="btn">UserTest</button>
                </div>
            </div>
            <main role="main" class="w-full flex-grow pt-1 px-3">
                <!-- <button @click="postStore.refreshPosts()" class="btn">refresh posts</button> -->
                <!-- fluid-width: main content goes here -->
                <ul>
                    <li v-for="post in posts" v-bind:key="post.id">
                        <PostCard :title='post.name' :content='post.content' :author='post.author' :username='post.username'/>
                    </li>
                </ul>
            </main>
            <div class="w-fixed w-full flex-shrink flex-grow-0 px-2">
                <!-- fixed-width -->
                <div class="flex sm:flex-col px-2">
                    <!-- sidebar goes here -->
                    <adBox />
                </div>
            </div>
        </div>
        <input type="checkbox" id="createpost-modal" class="modal-toggle" />
        <div class="modal">
        <div class="modal-box">
            <!-- <h3 class="font-bold text-lg">Congratulations random Interner user!</h3> -->
            <!-- <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p> -->
            <!-- <p v-if="authStore.getCurrentUserID">Logged In</p>
            <p v-else >No sign in </p> -->
            <create-post v-if="authStore.hasProfile" />
            <p v-else >Go to Account Settings and create a profile first!</p>
            <div class="modal-action">
            <label for="createpost-modal" class="btn">Exit</label>
            </div>
        </div>
        </div>
    </div>
</template>


<style scoped>
@media (min-width: 640px) {
    .w-fixed {
        flex: 0 1 230px;
        min-width: 230px;
    }
}

</style>