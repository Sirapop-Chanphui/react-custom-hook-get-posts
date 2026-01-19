import { useNavigate } from "react-router-dom";
import useBlogPosts from "../hooks/useBlogPosts";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function ViewPostPage() {
  const navigate = useNavigate();
  const { posts, selectedPost, getPosts, isLoading, getPostById, isError } = useBlogPosts();
  const { id } = useParams();

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    getPostById(id);
  }, [id]);

  return (
    <div>
      <h1>View Post Page</h1>
      <div className="view-post-container">
        {selectedPost ? (
          <>
            <h2>{selectedPost.title}</h2>
            <p>{selectedPost.content}</p>
          </>
        ) : null}
        {isError ? <h1>Request failed</h1> : null}
        {isLoading ? <h1>Loading ....</h1> : null}
      </div>

      <hr />
      <div className="show-all-posts-container">
        <h2>All Posts</h2>
        {posts.map((post) => {
          return (
            <div key={post.id} className="post">
              <h1>{post.title}</h1>
              <div className="post-actions">
                <button
                  className="view-button"
                  onClick={() => navigate(`/post/view/${post.id}`)}
                >
                  View post
                </button>
              </div>
            </div>
          );
        })}
        {isError ? <h1>Request failed</h1> : null}
        {isLoading ? <h1>Loading ....</h1> : null}
      </div>

      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ViewPostPage;
