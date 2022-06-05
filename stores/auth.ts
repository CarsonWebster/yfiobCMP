import { defineStore } from 'pinia';
import useSupabase from '~/composables/useSupabase'
import { User } from '@supabase/supabase-js';

const {supabase} = useSupabase();

type State = {
  currentUser: User | null;
};

type Getters = {
  isAuthenticated(): boolean;
  hasProfile(): boolean;
  getUserProfile(): void;
};

type Actions = {
  loadUser(): void;
  clearUser(): void;
  fetchProfiles(): void;
  fetchUserProfile(): void;
  loadUserProfile(): void;
  uploadProfile(username, firstname, lastname, pronouns, gradyear, bio): void;
  updateProfile(username, firstname, lastname, pronouns, gradyear, bio): void;
};

export const useAuthStore = defineStore<'auth', State, Getters, Actions>(
  'auth',
  {
    state() {
      return {
        currentUser: null,
        profiles: [],
        currentProfile: null,
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
        if (supabase.auth.user()) {
          let { data: profile, error } = await supabase
          .from('profiles')
          .select('*')
          .match({user_id: supabase.auth.user().id})
          .single()
          if (error) throw error
          console.log('Success Loaded Profile', profile)
          this.currentProfile = profile
        } else {
          console.log('no user')
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
      async uploadProfile(username, firstname, lastname, pronouns, gradyear, bio) {
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
          },
        ])
        if (error) throw error
        this.currentProfile = newProfile
        return newProfile
      },
      async updateProfile(username, firstname, lastname, pronouns, gradyear, bio) {
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
