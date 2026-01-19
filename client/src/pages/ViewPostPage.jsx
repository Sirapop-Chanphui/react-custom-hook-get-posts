import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import useBlogPosts from "../hooks/useBlogPosts";

function ViewPostPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { posts, isLoading, isError, getPostById } = useBlogPosts();
  const currentPost = getPostById(id);

  return (
    <div>
      <h1>View Post Page</h1>
      <div className="view-post-container">
        {currentPost ? (
          <>
            <h2>{currentPost.title}</h2>
            <p>{currentPost.content}</p>
            <div className="likes-bar">
              <span className="likes-icon">❤️</span>
              <span className="likes-count">{currentPost.likes}</span>
            </div>
          </>
        ) : (
          <p>Post not found</p>
        )}
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
