import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useBlogPosts from "../hooks/useBlogPosts";

function CreatePostPage() {
  const navigate = useNavigate();
  const { createPost } = useBlogPosts();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim()) {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }

    const success = await createPost({ title, content, likes: 0 });
    
    if (success) {
      navigate("/");
    } else {
      alert("เกิดข้อผิดพลาดในการสร้างโพสต์");
    }
  };

  return (
    <div>
      <h1>Create Post Page</h1>
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
          <button type="submit">Create Post</button>
          <button type="button" onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePostPage;
