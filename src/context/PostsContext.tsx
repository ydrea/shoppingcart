import { createContext } from 'react'
import {Posto} from '../types/posts'

export interface PostsContextData {
    posts: Posto[];
    isLoading: boolean;
    fetchPosts: () => void;
    removePost: (postId: number) => void;
  }
   
  export const postsContextDefaultValue: PostsContextData = {
    posts: [],
    isLoading: false,
    fetchPosts: () => null,
    removePost: () => null
  }
   
  export const PostsContext = createContext<PostsContextData>(postsContextDefaultValue);

  //
  