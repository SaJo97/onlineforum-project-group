import React from "react";
import { useParams } from "react-router-dom";

interface ThreadDetailProps {
  threads: Thread[];
}

const ThreadDetail: React.FC<ThreadDetailProps> = ({ threads }) => {
  const { id } = useParams();
  const thread = threads.find((t) => t.id.toString() === id);

  if (!thread) return <div>Tråd hittades inte!</div>;

  return (
    <div>
      <h1>{thread.title}</h1>
      <p>Category: {thread.category}</p>
      <p>Created by: {thread.creator.userName}</p>
      <p>Date: {thread.creationDate}</p>
      <p>{thread.description}</p>
    </div>
  );
};

export default ThreadDetail;
