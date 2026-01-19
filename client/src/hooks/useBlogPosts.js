import { useState } from "react";
import axios from "axios";

function useBlogPosts() {
  const [posts, setPosts] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

  const getPosts = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const results = await axios("http://localhost:4000/posts");
      setPosts(results.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }

  }

  const getPostById = async (id) => {
    try {
      setIsError(false);
      setIsLoading(true);
      const results = await axios(`http://localhost:4000/posts/${id}`);
      setSelectedPost(results.data.data);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return { posts, selectedPost, getPosts, getPostById, isLoading, isError };
};


export default useBlogPosts