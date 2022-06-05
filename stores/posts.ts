import { defineStore } from 'pinia';
import useSupabase from '~/composables/useSupabase'
import { User } from '@supabase/supabase-js';

const {supabase} = useSupabase();

export const usePostStore = defineStore({
  id: 'post-store',
  state: () => {
    return {
      posts: [],
      fetching: false,
    }
  },
  actions: {
    // async refreshPosts(){
    //   console.log('refreshing posts!')
    //   console.log(this.posts)
    //   let { data: posts, error } = await supabase
    //   .from('posts')
    //   .select('*')
    //   if (error) throw error
    //   console.log('fetched posts')
    //   console.log(posts)
    //   this.posts = posts
    //   console.log('new saved posts')
    //   console.log(this.getPosts)
    // },
    async fetchPosts() {
      console.log('fetching posts')
      let { data: posts, error } = await supabase
      .from('posts')
      .select('*')
      if (error) throw error
      console.log('fetched posts')
      console.log(posts)
      this.posts = posts
      return posts
    }
  },
  getters: {
    isEmpty() {
      return !this.posts
    }, 
    isFetching() {
      return this.fetching
    },
    getPosts() {
      this.fetchNewPosts()
      return this.posts
    }
  },
})