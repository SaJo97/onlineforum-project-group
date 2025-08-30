
const THREADS_KEY = "onlineforum_threads";
const COMMENTS_KEY = "onlineforum_comments";

export function loadThreads(): Thread[] { // SPARAS INTE - FIXA TILL
  const data = localStorage.getItem(THREADS_KEY);
  if (!data) return [];
  try {
    return JSON.parse(data) as Thread[];
  } catch {
    return [];
  }
}
export function saveThreads(threads: Thread[]) {
  localStorage.setItem(THREADS_KEY, JSON.stringify(threads));
}
export function loadComments(): Comments[] {
  const data = localStorage.getItem(COMMENTS_KEY);
  if (!data) return [];
  try {
    return JSON.parse(data) as Comments[];
  } catch {
    return [];
  }
}
export function saveComments(comments: Comments[]) {
  localStorage.setItem(COMMENTS_KEY, JSON.stringify(comments));
}