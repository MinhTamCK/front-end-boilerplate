import axios from "@/services/http";
import { Post } from "@/interfaces/post";

export const getPosts = async (): Promise<Post[]> => {
  let posts = [];
  try {
    const { data } = await axios.get("posts");
    posts = data;
    return posts;
  } catch (error) {
    // log error
  }
  return posts;
};
