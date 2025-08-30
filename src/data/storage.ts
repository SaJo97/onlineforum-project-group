const THREADS_KEY = "onlineforum_threads";
const COMMENTS_KEY = "onlineforum_comments";

export function loadThreads(): Thread[] {
  // Hämtar Trådarna
  const data = localStorage.getItem(THREADS_KEY);
  if (!data) return [];
  try {
    return JSON.parse(data) as Thread[];
  } catch {
    return [];
  }
}
export function saveThreads(threads: Thread[]) {
  // Sparar Trådarna
  localStorage.setItem(THREADS_KEY, JSON.stringify(threads));
}
export function loadComments(): Comments[] {
  // Hämtar kommentarer
  const data = localStorage.getItem(COMMENTS_KEY);
  if (!data) return [];
  try {
    return JSON.parse(data) as Comments[];
  } catch {
    return [];
  }
}
export function saveComments(comments: Comments[]) {
  // Sparar kommentarer
  localStorage.setItem(COMMENTS_KEY, JSON.stringify(comments));
}
