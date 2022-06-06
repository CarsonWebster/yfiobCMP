import { defineStore } from 'pinia'
const {supabase} = useSupabase();

export const useProfileStore = defineStore({
  id: 'profile-store',
  state: () => {
    return {
      profiles: [],
      currentProfile: null,
    }
  },
  actions: {
    // async fetchProfiles() {
    //   // console.log('fetching profiles')
    //   let { data: profiles, error } = await supabase
    //   .from('profiles')
    //   .select('*')
    //   if (error) throw error
    //   // console.log('fetched profiles')
    //   // console.log(profiles)
    //   this.profiles = profiles
    //   return profiles
    // },
    async fetchUserProfile() {
      const user = supabase.auth.user()
      console.log('weird fetch user stuff', user)
      if (user) {
        console.log('fetching profiles with id', user.id)
        let { data: profile, error } = await supabase
        .from('profiles')
        .select('*')
        .match({user_id: user.id})
        .single()
        if (error) throw error
        // console.log('fetched profile')
        // console.log(profile)
        this.currentProfile = profile
        return profile
      }
      else {
        console.log('fetchUserProfile Error: No user')
        this.currentProfile = null
        return null
      }
    }, 
    async uploadProfile(username, firstname, lastname, pronouns, gradyear, bio, profession) {
      const user = supabase.auth.user()
      const { data: newProfile, error } = await supabase
      .from('profiles')
      .insert([
        { user_id: user.id,
          username: username, 
          firstname: firstname, 
          lastname: lastname, 
          pronouns: pronouns, 
          gradyear: gradyear, 
          bio: bio, 
          profession: profession
        },
      ])
      if (error) throw error
      this.currentProfile = newProfile
      return newProfile

    }
  },
  getters: {isEmpty() {
    return !this.profiles
  }, 
  getProfiles() {
    return this.profiles
  },
  hasProfile() {
    return !!this.currentProfile
  },
  getUserProfile() {
    return this.currentProfile
  }
},
})