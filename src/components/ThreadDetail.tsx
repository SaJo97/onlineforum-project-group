import { useState } from "react";
import CreateComment from "./CreateComment";

interface Props {
  thread?: Thread;
  currentUser: User;
  comments: Comments[];
  addComment: (comment: Comments) => void;
}

const ThreadDetail: React.FC<Props> = ({
  thread,
  currentUser,
  addComment,
  comments,
}) => {
  const [showCommentForm, setShowCommentForm] = useState(false);
  if (!thread) return <div>Tråd hittades inte!</div>;

  return (
    <div className="thread-detail">
      <h1>{thread.title}</h1>
      <p>Category: {thread.category}</p>
      <p>Created by: {thread.creator.userName}</p>
      <p>Date: {new Date(thread.creationDate).toLocaleString()}</p>
      <p>{thread.description}</p>

      <h3>Kommentarer ({comments.length})</h3>
      {comments.length === 0 && <p>Inga kommentar än.</p>}
      <ul className="comment-list">
        {comments.map((c) => (
          <li key={c.id} className="comment">
            <p>{c.content}</p>
            <p>Av: {c.creator.userName}</p>
          </li>
        ))}
      </ul>
      {showCommentForm ? (
        <CreateComment
          threadId={thread.id}
          currentUser={currentUser}
          addComment={(comment) => addComment(comment)}
        />
      ) : (
        <button onClick={() => setShowCommentForm(true)}>
          Lägg till kommentar
        </button>
      )}
    </div>
  );
};

export default ThreadDetail;
