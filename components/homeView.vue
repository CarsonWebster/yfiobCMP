<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import {usePostStore } from '@/stores/posts'
// const {supabase} = useSupabase();
// const router = useRouter()
// const authStore = useAuthStore();
const postStore = usePostStore();
const posts = await postStore.fetchPosts();
// const posts = useAsyncData('posts', async () => {postStore.getPosts}
// router.push('')
// const { data: posts } = useAsyncData('posts', async () => {
//   const { data: posts, error } = await supabase.from('posts').select('*')
//     // console.log("Return data")
//     // console.log(posts)
//   return posts
// })
// postStore.refreshPosts();
// const posts = postStore.getPosts
// async function logPosts() {
//     console.log('Logging new posts')
//     console.log(postStore.getPosts)
// }

</script>

<template>
    <div>
        <TitleCard title="Community Mentorship Platform" />
        <div class="w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap py-4 flex-grow">
            <!-- fixed-width -->
            <div class="w-fixed w-full flex-shrink flex-grow-0 px-4">
                <div class="sticky top-0 p-4 w-full h-full">
                    <!-- leftside goes here -->
                    <FilterBox />
                </div>
            </div>
            <main role="main" class="w-full flex-grow pt-1 px-3">
                <!-- <button @click="postStore.refreshPosts()" class="btn">refresh posts</button> -->
                <!-- fluid-width: main content goes here -->
                <ul>
                    <li v-for="post in posts" v-bind:key="post.id">
                        <PostCard :title='post.name' :content='post.content' :author='post.author'/>
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