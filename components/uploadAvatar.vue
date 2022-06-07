<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import useSupabase from '~/composables/useSupabase'
const {supabase} = useSupabase();
const authStore = useAuthStore();

let avatarFile = null
let { data: profile, error } = await supabase
          .from('profiles')
          .select('*')
          .match({user_id: authStore.getCurrentUserID})
          .single()
async function updateAvatar(event) {
    // console.log('Updating avatar')
    // console.log(event)
    // console.log(event.target.files[0])
    avatarFile = event.target.files[0]
    // console.log(avatarFile.name)
}
// async function findAvatar() {
//     console.log('Finding Avatar')
//     const { publicURL, error } = supabase
//     .storage
//     .from('avatars')
//     .getPublicUrl(profile.user_id)
//     if (error) return false
//     else {
//         console.log('found publicURL: ', publicURL)
//         return publicURL
//     }
// }

async function uploadAvatar() {  
    if(profile.avatar_url == 'https://ttzewlgqdgjdgvmsnywg.supabase.co/storage/v1/object/public/avatars/defaultAvatar.png') {
        console.log('Default URL found !')
        console.log('Uploading avatar !')
        const { data, error } = await supabase
        .storage
        .from('avatars')
        .upload(profile.user_id, avatarFile, {
            cacheControl: '3600',
            upsert: false
        })
        console.log('uploadAvatarError, ', error)
        if (error) throw error
        console.log('Happy image upload!', data)
        let newURL = 'https://ttzewlgqdgjdgvmsnywg.supabase.co/storage/v1/object/public/avatars/' + authStore.getCurrentUserID
        console.log('newURL, ', newURL)
        const { data: newProfile, error: error2 } = await supabase
        .from('profiles')
        .update([
          { 
            avatar_url: newURL,
          }
        ])
        .match({ user_id: authStore.getCurrentUserID})
        console.log('updateProfileAvatarError, ', error2)
        if (error2) throw error2
        console.log('Updated avatar URL!', newProfile)
    }
    else {
        // console.log('Distinct Avatar URL found')
        // console.log('Updating avatar...')
        const { data, error } = await supabase
        .storage
        .from('avatars')
        .update(authStore.getCurrentUserID, avatarFile, {
            cacheControl: '3600',
            upsert: false
        })
        console.log('updateAvatarError, ', error)
        if (error) throw error
        console.log('Happy image update!', data)
    }
}

</script>

<template>
    <div>
        <div class="avatar">
            <div class="w-24 rounded-full">
                <img v-if="profile.avatar_url" :src="profile.avatar_url" />
                <p v-else className="avatar no-image" >No image</p>
            </div>
        </div>
        <!-- <img v-if="profile.avatar_url"
          :src='profile.avatar_url'
          alt="Avatar"
          className="avatar image"
        /> -->
        
      <!-- <div >
        <label className="button primary block" htmlFor="single">
        </label>
        <input
          type="file"
          id="single"
          accept="image/*"
          onChange={uploadAvatar}
          disabled={uploading}
        />
      </div> -->
      <form>
        <input
            type="file"
            id="single"
            accept="image/*"
            @change='updateAvatar'
            />
            <button @click='uploadAvatar' type="submit" class="w-auto px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Update Avatar</button>
        </form>
    </div>
</template>