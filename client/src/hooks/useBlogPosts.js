import { useState, useEffect } from 'react';
import axios from 'axios';

const useBlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

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
  };

  useEffect(() => {
    getPosts();
  }, []);

  const getPostById = (id) => {
    if (!id) return null;
    return posts.find(post => post.id === parseInt(id));
  };

  const createPost = async (postData) => {
    try {
      await axios.post("http://localhost:4000/posts", postData);
      await getPosts(); // Refresh data
      return true;
    } catch (error) {
      setIsError(true);
      return false;
    }
  };

  const updatePost = async (id, postData) => {
    try {
      await axios.put(`http://localhost:4000/posts/${id}`, postData);
      await getPosts(); // Refresh data
      return true;
    } catch (error) {
      setIsError(true);
      return false;
    }
  };

  const deletePost = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/posts/${id}`);
      await getPosts(); // Refresh data
      return true;
    } catch (error) {
      setIsError(true);
      return false;
    }
  };

  return {
    posts,
    isLoading,
    isError,
    getPostById,
    createPost,
    updatePost,
    deletePost
  };
};

export default useBlogPosts;
