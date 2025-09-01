import {useState, FormEvent} from "react";

interface CreateCommentProps {
  threadId: number;
  currentUser: User;
  addComment: (comment: Comments) => void;
}


const CreateComment = ({threadId, currentUser, addComment}: CreateCommentProps ) => {
      const [content, setContent] = useState("");

      const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if(!content.trim()) return;

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
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <textarea 
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Skriv en kommentar"
            className="border p-2 rounded"
            />

            <button type ="submit" className="bg-blue-500 text-white p-2 rounded">
              Skicka
            </button>
        </form>
      )
}


export default CreateComment;