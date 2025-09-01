import React from "react";
import { Link } from "react-router";
import { useThread } from "../context/threadContext";

// Hjälpfunktion som begränsar en text till ett visst antal ord
// Om texten är längre än 'limit' ord, läggs "..." till i slutet
const limitWords = (text: string, limit: number) => {
  const words = text.split(" ");
  if (words.length <= limit) return text;
  return words.slice(0, limit).join(" ") + "...";
};

// Tar emot en array av threads via props
const ThreadList = () => {
  const { threads } = useThread();
  return (
    <div className="thread-list">
      <h1>Alla trådar</h1>

      {/* Loopar igenom alla threads och renderar varje tråd */}
      {threads.map((thread) => (
        <div key={thread.id} className="thread-card">
          <Link
            to={`/thread/${thread.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <h1>{thread.title}</h1>
            <p>Category: {thread.category}</p>
            <p>Created by: {thread.creator.userName}</p>
            <p>Date: {new Date(thread.creationDate).toLocaleString()}</p>
            <p>{limitWords(thread.description, 20)}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ThreadList;
