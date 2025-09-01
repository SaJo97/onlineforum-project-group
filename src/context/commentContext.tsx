
import {createContext, useState, ReactNode} from "react";




interface CommentsContextType {
  comments: Comments[];
  addComment: (content: string, threadId: number, creator: User) => void;
}


export const CommentsContext = createContext<CommentsContextType | null>(null);




export const CommentProvider = ({children}: {children: ReactNode}) => {
    const [comments, setComments] = useState<Comments[]>([]);

    const addComment = (content: string, threadId: number, creator: User) => {
        const newComment: Comments = {
            id: Date.now(),
            thread: threadId,
            content,
            creator,
            
        };
        setComments(prev => [...prev, newComment]);
    };


    return (
        <CommentsContext.Provider value={{comments, addComment}}>

            {children}
        </CommentsContext.Provider>
    );

};
