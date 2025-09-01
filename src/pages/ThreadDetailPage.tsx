import { useParams } from "react-router";
import { useThread } from "../context/threadContext";
import ThreadDetail from "../components/ThreadDetail";
import { useComment } from "../context/commentContext";

const defaultUser = { userName: "guest", password: "guest" };
const ThreadDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { threads } = useThread();
  const { comments, addComment } = useComment();
  const threadId = Number(id);

  const thread = threads.find((t) => t.id === threadId);
  const threadComments = comments.filter((c) => c.thread === threadId);
  return (
    <div>
      <ThreadDetail
        thread={thread}
        currentUser={defaultUser}
        comments={threadComments}
        addComment={addComment}
      />
    </div>
  );
};
export default ThreadDetailPage;
