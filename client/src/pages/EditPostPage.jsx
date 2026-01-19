import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useBlogPosts from "../hooks/useBlogPosts";

function EditPostPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { updatePost, getPostById, posts, isLoading } = useBlogPosts();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!isLoading && posts.length > 0 && !isInitialized) {
      const currentPost = getPostById(id);
      if (currentPost) {
        setTitle(currentPost.title);
        setContent(currentPost.content);
        setIsInitialized(true);
      } else {
        navigate("/");
      }
    }
  }, [id, posts, isLoading, getPostById, navigate, isInitialized]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim()) {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }

    const success = await updatePost(id, { title, content });
    
    if (success) {
      navigate(`/post/view/${id}`);
    } else {
      alert("เกิดข้อผิดพลาดในการแก้ไขโพสต์");
    }
  };

  return (
    <div>
      <h1>Edit Post Page</h1>
      <form className="post-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter post title"
          />
        </div>
        <div className="input-container">
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter post content"
            rows="5"
          />
        </div>
        <div className="form-actions">
          <button type="submit">Update Post</button>
          <button type="button" onClick={() => navigate(`/post/view/${id}`)}>
            Back to View
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditPostPage;
