import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { loadThreads, saveThreads } from "../data/storage";

type ThreadState = {
  threads: Thread[];
  createThread: (thread: Thread) => void;
};

const defaultState: ThreadState = {
  threads: [],
  createThread: () => {},
};

const ThreadContext = createContext<ThreadState>(defaultState);

export const ThreadProvider = ({ children }: PropsWithChildren) => {
  const [threads, setThreads] = useState<Thread[]>([]);
  //Hämtar och sätter Trådarna
  useEffect(() => {
    const loadedThreads = loadThreads();
    setThreads(loadedThreads);
  }, []);
  //Skapelse av Tråd - sparar i localstorage
  const createThread = (thread: Thread) => {
    setThreads((prev) => {
      const updated = [...prev, thread];
      saveThreads(updated);
      return updated;
    });
  };

  return (
    <ThreadContext.Provider value={{ threads, createThread }}>
      {children}
    </ThreadContext.Provider>
  );
};
export function useThread() {
  const context = useContext(ThreadContext);
  if (!context) {
    throw new Error("useThread must be used within an ThreadProvider");
  }
  return context;
}
