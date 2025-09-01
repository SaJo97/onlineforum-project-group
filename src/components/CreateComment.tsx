import {useState, useContext, FormEvent} from "react";
import { CommentsContext } from "../context/commentContext";

import { saveComments, loadComments } from "../data/storage";





interface CreateCommentProps {
  threadId: number;
  creator: User;
}


const CreateComment = ({threadId, creator}: CreateCommentProps ) => {
      const [content, setContent] = useState("");
      const context = useContext(CommentsContext);

      if(!context) return null;
      const {addComment} = context;

      const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if(!content.trim()) return;

        const newComment: Comments = {
          id: Date.now(),
          thread: threadId,
          content,
          creator,
        };


        addComment(content, threadId, creator);
        saveComments([...loadComments(), newComment]);

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