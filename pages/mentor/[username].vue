<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import useSupabase from '~/composables/useSupabase'
const {supabase} = useSupabase();
const authStore = useAuthStore();
const route = useRoute()
const routeUsername = route.params.username
console.log('Mentor page')
console.log(routeUsername)
let { data: mentorProfile, error } = await supabase
          .from('profiles')
          .select('*')
          .match({username: routeUsername})
          .single()

</script>

<template>
    <div>
        <mentor-vue v-if='mentorProfile' />
        <emptyPage v-else />
    </div>
    
</template>