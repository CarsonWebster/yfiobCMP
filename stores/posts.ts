import { defineStore } from 'pinia';
import useSupabase from '~/composables/useSupabase'
import { User } from '@supabase/supabase-js';
import { ProfileCreationVue } from '~~/.nuxt/components';
const {user} = useAuth();
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
    async fetchPosts() {
      // console.log('fetching posts')
      let { data: posts, error } = await supabase
      .from('posts')
      .select('*')
      if (error) throw error
      // console.log('fetched posts')
      // console.log(posts)
      this.posts = posts
      return posts
    },
    async publishPost(username, author, content) {
      const { data: newPost, error } = await supabase
      .from('posts')
      .insert([
        { user_id: user.id, 
          username: username,
          author: author,
          content: content,
          avatarURL: 'https://ttzewlgqdgjdgvmsnywg.supabase.co/storage/v1/object/public/avatars/' + user.id,
        },
      ])
      if (error) throw error
      return newPost
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