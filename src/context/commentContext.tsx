import {
  createContext,
  useState,
  useContext,
  useEffect,
  PropsWithChildren,
} from "react";
import { loadComments, saveComments } from "../data/storage";

type CommentsContextType = {
  comments: Comments[];
  addComment: (comments: Comments) => void;
};

const defaultState: CommentsContextType = {
  comments: [],
  addComment: () => {},
};

export const CommentsContext = createContext<CommentsContextType>(defaultState);

export const CommentProvider = ({ children }: PropsWithChildren) => {
  const [comments, setComments] = useState<Comments[]>([]);

  useEffect(() => {
    const loadedComments = loadComments();
    setComments(loadedComments);
  }, []);

  const addComment = (comment: Comments) => {
    setComments((prev) => {
      const updated = [...prev, comment];
      saveComments(updated);
      return updated;
    });
  };

  return (
    <CommentsContext.Provider value={{ comments, addComment }}>
      {children}
    </CommentsContext.Provider>
  );
};

export function useComment() {
  const context = useContext(CommentsContext);
  return context;
}
