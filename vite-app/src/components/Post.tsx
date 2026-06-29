import axios from "axios";
import { useEffect, useState } from "react";
import { FaComment } from "react-icons/fa";
import Comment from "./commet";
interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

const PostCard = ({ post }: { post: Post }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [showComments, setShowComments] = useState(false);
  const [loadingComments, setLoadingComments] = useState(false);
  const fetchComments = async () => {
    try {
      setLoadingComments(true);

      const response = await axios.get<Comment[]>(
        `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`,
      );

      setComments(response.data);
      setShowComments(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingComments(false);
    }
  };

  const toggleComments = () => {
    if (showComments) {
      setShowComments(false);
      return;
    }

    if (comments.length > 0) {
      setShowComments(true);
      return;
    }

    fetchComments();
  };

  const buttonLabel = loadingComments
    ? "Loading Comments..."
    : showComments
      ? comments.length > 0
        ? "Hide Comments"
        : "Loading Comments..."
      : comments.length > 0
        ? "Show Comments"
        : "View Comments";

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
      <div className="flex items-center gap-3 p-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500 font-bold text-white">
          U
        </div>

        <div>
          <h3 className="font-semibold">User {post.userId}</h3>
          <p className="text-sm text-gray-500">@user{post.userId}</p>
        </div>
      </div>

      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold capitalize">{post.title}</h2>

        <p className="text-gray-700">{post.body}</p>

        <button
          onClick={toggleComments}
          className="mt-6 rounded-lg px-5 py-2transition w-full flex flex-row justify-end items-end-safe"
        >
          {loadingComments ? `${buttonLabel}` : <FaComment />}
        </button>
      </div>

      {showComments && (
        <div className="bg-gray-50 p-5">
          <h3 className="mb-5 text-lg font-bold">
            💬 Comments ({comments.length})
          </h3>
          <Comment comments={comments} />
        </div>
      )}
    </div>
  );
};

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoadingPosts(true);

      const response = await axios.get<Post[]>(
        "https://jsonplaceholder.typicode.com/posts",
      );

      setPosts(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingPosts(false);
    }
  };

  if (loadingPosts) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-semibold">Loading posts...</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10">
      <div className="mx-auto space-y-8 px-4">
        <h1 className="text-center text-4xl font-bold">Latest Posts</h1>

        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
