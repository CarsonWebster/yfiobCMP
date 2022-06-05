import { defineStore } from 'pinia';
import useSupabase from '~/composables/useSupabase'
import { User } from '@supabase/supabase-js';

const {supabase} = useSupabase();

type State = {
  currentUser: User | null;
};

type Getters = {
  isAuthenticated(): boolean;
};

type Actions = {
  loadUser(): void;
  clearUser(): void;
};

export const useAuthStore = defineStore<'auth', State, Getters, Actions>(
  'auth',
  {
    state() {
      return {
        currentUser: null,
      };
    },
    getters: {
      isAuthenticated() {
        return !!this.currentUser;
      },
    },
    actions: {
      loadUser() {
        this.currentUser = supabase.auth.user();
      },
      clearUser() {
        this.currentUser = null;
      }
    }
  }
);
