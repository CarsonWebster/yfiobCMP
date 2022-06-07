<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import useSupabase from '~/composables/useSupabase'
import {usePostStore } from '@/stores/posts'

const postStore = usePostStore();
const posts = await postStore.fetchPosts();

const {supabase} = useSupabase();
const authStore = useAuthStore();
const route = useRoute()
const routeUsername = route.params.username

let { data: mentorProfile, error } = await supabase
          .from('profiles')
          .select('*')
          .match({username: routeUsername})
          .single()

const filteredPosts = posts.filter(post => post.username === routeUsername)
</script>

<template>
    <div class="items-center justify-center">
        <!-- <pre>{{mentorProfile}}</pre>
        <pre>{{posts}}</pre> -->
        <!-- <div class="bg-white p-1 flex items-center justify-center">
            <div class="avatar placeholder">
                <div class="bg-neutral-focus text-neutral-content rounded-full w-1a">
                    <span>CW</span>
                </div>
            </div>
            <div class="">
                <span class="text-black font-bold block">{{mentorProfile.firstname}} {{mentorProfile.lastname}}</span>
                <span class="text-black block leading-snug mt-3">{{mentorProfile.profession}}</span>
                <p>ahh</p>
            </div>
        </div>
        <div>

        </div> -->
        <div class="p-1 flex items-center justify-center">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div class="flex justify-end px-4 pt-4">
                <!-- <button id="dropdownButton" data-dropdown-toggle="dropdown" class="hidden sm:inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                </button> -->

                <!-- <div id="dropdown" class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(642.5px, 2816px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top">
                <ul class="py-1" aria-labelledby="dropdownButton">
                <li>
                <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                </li>
                <li>
                <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                </li>
                <li>
                <a href="#" class="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                </li>
                </ul>
                </div> -->
                </div>
                <div class="flex flex-col items-center pb-10">
                <img class="mb-3 w-24 h-24 rounded-full shadow-lg" :src='mentorProfile.avatar_url' alt="profile image">
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{{mentorProfile.firstname}} {{mentorProfile.lastname}}</h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">{{mentorProfile.profession}}</span>
                <div class="flex mt-4 space-x-3 lg:mt-6">
                <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Follow</a>
                <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
                </div>
                <p class="pt-12">{{mentorProfile.bio}}</p>
                </div>
            </div>
        </div>
        <ul>
            <li v-for="post in filteredPosts" v-bind:key="post.id">
                <PostCard :title='post.name' :content='post.content' :author='post.author' :username='post.username' :avatarURL='post.avatarURL' />
            </li>
        </ul>
    </div>
</template>