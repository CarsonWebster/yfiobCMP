<script setup lang="ts">
import useSupabase from '~/composables/useSupabase'
const {supabase} = useSupabase();
let { data: profiles, error } = await supabase
          .from('profiles')
          .select('*')
</script>

<template>
    <div>
        <!--  Top Header -->
      <div class="bg-[#5b50dd] w-auto h-auto flex justify-flex items-center">
        <h1 class=" w-96 font-mono font-extrabold text-center text-5xl text-antialiased text-white m-6">Science and Innovation Fair</h1>
        <div class=" w-auto "></div>
      </div>
      <!--  Second Header -->
      <div class="flex-inline">
        <div class="bg-[#000000] w-auto h-20 flex items-center justify-between">
          <button class="btn px-6 mx-6">Sign Up</button>
          <div class="inline-flex">
            <h1 class="font-mono font-extrabold text-center text-2xl antialiased text-white pl-120">4:00pm - 6:30 pm</h1>
            <h1 class="font-mono font-extrabold text-center text-2xl antialiased text-white px-6">March 8th, 2022</h1>
          </div>
        </div>
      </div>
      <!-- Event Content -->
      <div class="container mx-auto">
        <div class="flex flex-row flex-wrap py-4">
          <main role="main" class="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
                <!-- content area -->
                <h1 class="text-black dark:text-white font-bold block font-mono text-xl m-6">Learn about the wonderful projects students have been working on!</h1>
                <p>The Science and Innovation fair is an annual competition of science and engineering projects designed, developed, and displayed by students in grades 9-12. Participants share their creative abilities, knowledge, and interests with other students. Experienced judges critique the projects for qualities including scientific method, content, clarity of presentation, and originality.</p>
                <img src="@/assets/images/ScienceInnovationFair.png" />
                <p>Over the past five years we have seen many students recieve job offers as well as internships through the career fair. Come and be the next one!</p>
            </main>
            <aside class="w-full sm:w-1/3 md:w-1/4 px-2">
                <div class="sticky top-0 p-4 w-full">
                    <!-- navigation -->
                    <ul class="flex flex-col overflow-hidden">
                        <h1 class="text-black dark:text-white font-bold block italic">Mentors Attending</h1>
                        <ul>
                          <!-- <li>Mentor</li>
                          <li>Mentor</li>
                          <li>Mentor</li> -->
                          <li v-for="profile in profiles" v-bind:key="profile.user_id" class="justify-center items-center inline-flex">
                            <div class="avatar">
                              <div class="w-8 rounded-full">
                                  <img :src="profile.avatar_url" />
                                  <!-- <pre class="justify-center text-center">{{profile.firstname + profile.lastname}}</pre> -->
                              </div>
                            </div>
                            <NuxtLink :to="'/mentor/' + profile.username" ><pre class="justify-center text-center">{{profile.firstname + ' ' + profile.lastname}}</pre> </NuxtLink>
                            <!-- <p>tomato</p> -->
                          </li>
                        </ul>
                    </ul>
                </div>
            </aside>
        </div>
      </div>
    </div>
</template>