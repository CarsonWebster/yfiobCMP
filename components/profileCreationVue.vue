<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
const authStore = useAuthStore();

const username = ref('')
const firstname = ref('')
const lastname = ref('')
const pronouns = ref('')
const gradyear = ref('')
const bio = ref('')

async function uploadProfile() {
    console.log('Uploading profile!')
    console.log('username.value', username.value)
    console.log('firstname.value', firstname.value)
    console.log('lastname.value', lastname.value)
    console.log('pronouns.value', pronouns.value)
    console.log('gradyear.value', gradyear.value)
    console.log('bio.value', bio.value)
    const yaya = await authStore.uploadProfile(username.value, firstname.value, lastname.value, pronouns.value, gradyear.value, bio.value)
    console.log('New Profile, ', yaya)
    authStore.loadUserProfile();
    
}
// async function logInfo() {
//     console.log('Loggin info...')
//     console.log('Has profile? ', authStore.hasProfile)
//     console.log('Current profile? ', authStore.getUserProfile)
//     console.log('Fetching profiles')
//     // authStore.fetchUserProfile()
//     console.log('Has profile? ', authStore.hasProfile)
//     console.log('Current profile? ', authStore.getUserProfile)
// }

</script>

<template>
    <div>
        <main>
            <!-- <div class="p-16 flex justify-center items-center mb-4 sm:mb-0">
                <img src="@/assets/images/yfiobtran.png" class="w-auto h-20" alt="YFIOB Logo" />
            </div> -->
            <div class="bg-[#5b50dd] w-auto h-auto flex justify-center items-center">
                <h1 class="p-12 font-mono font-extrabold text-center text-5xl antialiased text-white">Account Creation</h1>
            </div>
            <!-- <div class="w-auto h-auto flex justify-center items-center">
                <h1 class="p-12 font-mono font-extrabold text-center text-5xl antialiased text-[#5b50dd]">Welcome !</h1>
            </div> -->
            <div class="w-auto h-auto flex justify-center items-center border-2 rounded-md">
                <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
                    <form>
                        <div class="form-group mb-6">
                            <input type="test" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="accountCreationFormUsername" placeholder="Username" v-model="username">
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="form-group mb-6">
                                <input type="text" class="form-control w-full block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="accountCreationFormFirstname" placeholder="First name" v-model="firstname">
                            </div>
                            <div class="form-group mb-6">
                                <input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="accountCreationFormLastname" placeholder="Last name" v-model="lastname">
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="form-group mb-6">
                                <input type="text" class="form-control w-full block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="accountCreationFormPronouns" placeholder="Pronouns" v-model="pronouns">
                            </div>
                            <div class="form-group mb-6">
                                <input type="number" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="accountCreationFormGradyear" placeholder="Graduation Year" v-model="gradyear">
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
                            <input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="accountCreationFormBio" placeholder="Bio" v-model="bio">
                        </div>
                        <!-- <div class="form-group form-check text-center mb-6">
                        <input type="checkbox"
                            class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                            id="exampleCheck25" checked>
                        <label class="form-check-label inline-block text-gray-800" for="exampleCheck25">Subscribe to our newsletter</label>
                        </div> -->
                        <button @click='uploadProfile' type="submit" class=" w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Sign up</button>
                        <!-- <button @click="logInfo">LogInfo</button>
                        <button @click="authStore.loadUserProfile">loadUserProfile</button> -->
                    </form>
                </div>
            </div>
        </main>
    </div>
</template>