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
  if (!thread) return <div>Tråd hittades inte!</div>;

  return (
    <div>
      <h1>{thread.title}</h1>
      <p>Category: {thread.category}</p>
      <p>Created by: {thread.creator.userName}</p>
      <p>Date: {thread.creationDate}</p>
      <p>{thread.description}</p>

      <h3>Kommentarer ({comments.length})</h3>
      {comments.length === 0 && <p>Inga kommentar än.</p>}
      <ul>
        {comments.map((c) => (
          <li key={c.id}>
            <p>{c.content}</p>
            <p>Av: {c.creator.userName}</p>
          </li>
        ))}
      </ul>
      <CreateComment
        threadId={thread.id}
        currentUser={currentUser}
        addComment={(comment) => addComment(comment)}
      />
    </div>
  );
};

export default ThreadDetail;
