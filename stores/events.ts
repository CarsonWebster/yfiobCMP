import { defineStore } from 'pinia';
import useSupabase from '~/composables/useSupabase'
import { User } from '@supabase/supabase-js';

const {supabase} = useSupabase();

export const useEventStore = defineStore({
  id: 'event-store',
  state: () => {
    return {
      posts: [],
    }
  },
  actions: {
    async refreshEvents(){
      console.log('refreshing events!')
      console.log(this.events)
      let { data: events, error } = await supabase
      .from('events')
      .select('*')
      if (error) throw error
      console.log('return events')
      console.log(events)
      this.events = events
      // console.log(this.events)
    },
    async fetchEvents() {
      console.log('fetching events')
      let { data: events, error } = await supabase
      .from('events')
      .select('*')
      if (error) throw error
      console.log('fetched events')
      console.log(events)
      return events
    }
  },
  getters: {
    isEmpty() {
      return !this.events
    }, 
    getEvents() {
      return this.events
    }
  },
})