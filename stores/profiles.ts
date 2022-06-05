import { defineStore } from 'pinia'
const {supabase} = useSupabase();

export const useProfileStore = defineStore({
  id: 'profile-store',
  state: () => {
    return {
      profiles: [],
    }
  },
  actions: {
    async fetchProfiles() {
      console.log('fetching profiles')
      let { data: profiles, error } = await supabase
      .from('profiles')
      .select('*')
      if (error) throw error
      console.log('fetched profiles')
      console.log(profiles)
      this.profiles = profiles
      return profiles
    }
  },
  getters: {isEmpty() {
    return !this.profiles
  }, 
  getProfiles() {
    return this.profiles
  }},
})