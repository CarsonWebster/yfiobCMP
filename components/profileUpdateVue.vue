<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import useSupabase from '~/composables/useSupabase'
const {supabase} = useSupabase();
const authStore = useAuthStore();
authStore.loadUser();
const currentUserId = authStore.getCurrentUserID;

let { data: profile, error } = await supabase
          .from('profiles')
          .select('*')
          .match({user_id: currentUserId})
          .single()

const username = ref('')
const firstname = ref('')
const lastname = ref('')
const pronouns = ref('')
const gradyear = ref('2022')
const bio = ref('')
const profession = ref('')

async function updateProfile() {
    console.log('Updating profile!')
    console.log('username.value', username.value)
    console.log('firstname.value', firstname.value)
    console.log('lastname.value', lastname.value)
    console.log('pronouns.value', pronouns.value)
    console.log('gradyear.value', gradyear.value)
    console.log('bio.value', bio.value)
    const yaya = await authStore.updateProfile(username.value, firstname.value, lastname.value, pronouns.value, gradyear.value, bio.value, profession.value)
    console.log('Updated Profile, ', yaya)
    authStore.loadUserProfile();
    
}
</script>

<template>
    <div>
        <!-- <form> -->
                    <div class="form-group mb-6">
                        <input type="test" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="accountCreationFormUsername" :placeholder="profile.username" v-model="username">
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="form-group mb-6">
                            <input type="text" class="form-control w-full block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="accountCreationFormFirstname" :placeholder="profile.firstname" v-model="firstname">
                        </div>
                        <div class="form-group mb-6">
                            <input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="accountCreationFormLastname" :placeholder="profile.lastname" v-model="lastname">
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="form-group mb-6">
                            <input type="text" class="form-control w-full block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="accountCreationFormPronouns" :placeholder="profile.pronouns" v-model="pronouns">
                        </div>
                        <div class="form-group mb-6">
                            <input type="number" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="accountCreationFormGradyear" :placeholder="profile.gradyear" v-model="gradyear">
                        </div>
                    </div>
                    <!-- <div class="form-group mb-6">
                        <input type="email" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
                            placeholder="Email address">
                    </div>
                    <div class="form-group mb-6">
                        <input type="password" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126"
                            placeholder="Password">
                    </div> -->
                    <div class="form-group mb-6">
                        <input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="accountCreationFormBio" placeholder="Profession" v-model="profession">
                    </div>
                    <div class="form-group mb-6">
                        <input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="accountCreationFormBio" :placeholder="profile.bio" v-model="bio">
                    </div>
                    <!-- <div class="form-group form-check text-center mb-6">
                    <input type="checkbox"
                        class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                        id="exampleCheck25" checked>
                    <label class="form-check-label inline-block text-gray-800" for="exampleCheck25">Subscribe to our newsletter</label>
                    </div> -->
                    <button @click='updateProfile' type="submit" class=" w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Update Information</button>
                    <!-- <button @click="logInfo">LogInfo</button>
                    <button @click="authStore.loadUserProfile">loadUserProfile</button> -->
                <!-- </form> -->
    </div>
</template>