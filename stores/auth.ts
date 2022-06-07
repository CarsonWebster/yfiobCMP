import { defineStore } from 'pinia';
import useSupabase from '~/composables/useSupabase'
import { User } from '@supabase/supabase-js';
const {user} = useAuth();
const {supabase} = useSupabase();

type State = {
  currentUser: User | null;
  profiles: [] | null;
  currentProfile: void | null;
};

type Getters = {
  isAuthenticated(): boolean;
  hasProfile(): boolean;
  getUserProfile(): void;
  getCurrentUserID(): string;
  isDev(): boolean;
};

type Actions = {
  loadUser(): void;
  clearUser(): void;
  fetchProfiles(): void;
  fetchUserProfile(): void;
  loadUserProfile(): void;
  uploadProfile(username, firstname, lastname, pronouns, gradyear, bio, profession): void;
  updateProfile(username, firstname, lastname, pronouns, gradyear, bio, profession): void;
};

export const useAuthStore = defineStore<'auth', State, Getters, Actions>(
  'auth',
  {
    state() {
      return {
        currentUser: null,
        profiles: [],
        currentProfile: null,
        dev: false,
      };
    },
    getters: {
      isAuthenticated() {
        return !!this.currentUser;
      },
      hasProfile() {
        return !!this.currentProfile;
      },
      getUserProfile() {
        return this.currentProfile;
      },
      isDev() {
        return this.dev;
      },
      getCurrentUserID() {
        if(this.currentUser) {
          return this.currentUser.id
        } else {
          return null
        }
      },
      async newGetUserProfile() {
        let { data: profile, error } = await supabase
          .from('profiles')
          .select('*')
          .match({user_id: user.value.id})
          .single()
          if (error) throw error
        console.log('Success grabbed Profile', profile)
        // this.currentProfile = profile
        return (profile)
      }
    },
    actions: {
      loadUser() {
        this.currentUser = supabase.auth.user();
      },
      clearUser() {
        this.currentUser = null;
      },
      async loadUserProfile() {
        // console.log('Hey!', this.currentUser.id)
        if (this.isAuthenticated) {
          let { data: profile, error } = await supabase
          .from('profiles')
          .select('*')
          .match({user_id: this.currentUser?.id})
          .single()
          if (error) throw error
          console.log('Success Loaded Profile', profile)
          this.currentProfile = profile
          
        } else {
          // console.log('no user, profile is null')
          this.currentProfile = null
        }
        
      },
      async fetchProfiles() {
        // console.log('fetching profiles')
        let { data: profiles, error } = await supabase
        .from('profiles')
        .select('*')
        if (error) throw error
        // console.log('fetched profiles')
        // console.log(profiles)
        this.profiles = profiles
        return profiles
      },
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
            avatar_url: 'https://ttzewlgqdgjdgvmsnywg.supabase.co/storage/v1/object/public/avatars/defaultAvatar.png',
            lastname: lastname, 
            pronouns: pronouns, 
            gradyear: gradyear, 
            bio: bio, 
            profession: profession,
          },
        ])
        if (error) throw error
        this.currentProfile = newProfile
        return newProfile
      },
      async updateProfile(username, firstname, lastname, pronouns, gradyear, bio, profession) {
        const user = supabase.auth.user()
        const { data: newProfile, error } = await supabase
        .from('profiles')
        .update([
          { 
            username: username, 
            firstname: firstname, 
            lastname: lastname, 
            pronouns: pronouns, 
            gradyear: gradyear, 
            bio: bio, 
            profession: profession,
          }
        ])
        .match({ user_id: user.id})
        if (error) throw error
        this.currentProfile = newProfile
        return newProfile
      },
    }
  }
);
