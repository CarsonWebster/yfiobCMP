<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import {usePostStore } from '@/stores/posts'
// const {user} = useAuth();
const {supabase} = useSupabase();
const authStore = useAuthStore();
const postStore = usePostStore();

const postContent = ref('')
const { data: profile, error } = await supabase
          .from('profiles')
          .select('*')
          .match({user_id: authStore.getCurrentUserID})
          .single()

// let author = profile.firstname + ' ' + profile.lastname
async function uploadPost() {
    console.log('Uploading Post with author', profile.firstname+' '+profile.lastname)
    console.log(postContent)
    // let returnPost = await postStore.publishPost(profile.username, profile.firstname+' '+profile.lastname, postContent.value)
    const { data: newPost, error } = await supabase
      .from('posts')
      .insert([
        { user_id: profile.user_id, 
          username: profile.username,
          author: profile.firstname+' '+profile.lastname,
          content: postContent.value,
          avatarURL: 'https://ttzewlgqdgjdgvmsnywg.supabase.co/storage/v1/object/public/avatars/' + profile.user_id,
        },
      ])
      if (error) throw error
      console.log(newPost)
      return newPost
    // console.log(returnPost)
}

</script>

<template>
    <div>
        <main>
            <div class="bg-[#5b50dd] w-auto h-auto flex justify-center items-center">
                <h1 class="p-12 font-mono font-extrabold text-center text-2xl antialiased text-white">Create Post</h1>
            </div>
            <div class="w-auto h-auto flex justify-center items-center border-2 rounded-md">
                <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
                    <form>
                        <!-- <input type="text" v-model="postContent" placeholder="" class="input input-bordered input-lg w-full max-w" /> -->
                        <textarea name="postContentBox" v-model="postContent" cols="45" rows="5"></textarea>
                        <button @click='uploadPost' type="submit" class=" w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Publish Post</button>
                    </form>
                </div>
            </div>
        </main>
    </div>
</template>