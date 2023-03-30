import { create } from "zustand";

import { Post } from "@/interfaces/post";

interface PostState {
  posts: Post[];
  setPosts: (payload: Post[]) => void;
}

const usePostStore = create<PostState>()(set => ({
  posts: [],
  setPosts: payload => set(() => ({ posts: payload })),
  resetPosts: () => set({ posts: [] }),
}));

export default usePostStore;
