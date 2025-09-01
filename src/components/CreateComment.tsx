import { useState, FormEvent } from "react";

interface CreateCommentProps {
  threadId: number;
  currentUser: User;
  addComment: (comment: Comments) => void;
}

const CreateComment = ({
  threadId,
  currentUser,
  addComment,
}: CreateCommentProps) => {
  const [content, setContent] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    const newComment: Comments = {
      id: Date.now(),
      thread: threadId,
      content: content.trim(),
      creator: currentUser,
    };

    addComment(newComment);
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="create-comment">
      <label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Skriv en kommentar"
          rows={3}
          maxLength={500}
          required
        />
      </label>
      <div className="buttons">
        <button type="submit">Skicka</button>
      </div>
    </form>
  );
};

export default CreateComment;
