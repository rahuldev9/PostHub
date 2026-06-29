import { useState } from "react";

interface CommentType {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

interface CommentProps {
  comments: CommentType[];
}

const Comment = ({ comments }: CommentProps) => {
  const [likes, setLikes] = useState<Record<number, number>>({});

  const handleLike = (id: number) => {
    setLikes((pre) => ({
      ...pre,
      [id]: (pre[id] || 0) + 1,
    }));
  };
  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="flex gap-3 rounded-xl bg-white p-4 shadow"
        >
          <img
            src={`https://i.pravatar.cc/150?img=${comment.id}`}
            alt={comment.name}
            className="h-10 w-10 rounded-full"
          />

          <div className="flex-1">
            <h4 className="font-semibold">{comment.name}</h4>
            <p className="text-sm text-gray-500">{comment.email}</p>
            <p className="mt-2 text-gray-700">{comment.body}</p>

            <div className="mt-3 flex gap-5 text-sm text-gray-500">
              <button
                onClick={() => handleLike(comment.id)}
                className={`transition text-gray-400hover:text-red-500`}
              >
                ❤️{likes[comment.id]} Like
              </button>
              <button
                className={`transition text-gray-400 hover:text-blue-500`}
              >
                Reply
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comment;
