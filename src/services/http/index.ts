import axios from "axios";

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default instance;
