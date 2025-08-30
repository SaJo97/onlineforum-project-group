import React, { useState } from "react";
import { useThread } from "../context/threadContext";

type ThreadFormProps = {
  currentUser:  User;
  onCancel: () => void;
  onCreateSuccess?: () => void;
}
const CreateThread = ({currentUser, onCancel, onCreateSuccess}: ThreadFormProps) => {
  const {createThread} = useThread();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<ThreadCategory>("THREAD");
  const [description, setDescription] = useState("");
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      alert("Titel och beskrivning krävs");
      return;
    }
    const _newThread: Thread = {
      id: Date.now(),
      title: title.trim(),
      category,
      creationDate: new Date().toISOString(),
      description: description.trim(),
      creator: currentUser,
    };
    createThread(_newThread)
    if (onCreateSuccess) {
      onCreateSuccess();
    }
  }
return (
    <form className="create-thread" onSubmit={handleSubmit}>
      <h2>Skapa ny tråd</h2>
      <label>
        Titel:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          maxLength={100}
        />
      </label>
      <label>
        Kategori:
        <select value={category} onChange={(e) => setCategory(e.target.value as ThreadCategory)}>
          <option value="THREAD">Tråd</option>
          <option value="QNA">Fråga & Svar</option>
        </select>
      </label>
<label>
        Beskrivning:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          rows={5}
          maxLength={1000}
        />
      </label>
      <div className="buttons">
        <button type="submit">Skapa</button>
        <button type="button" onClick={onCancel}>Avbryt</button>
      </div>
    </form>
  );
};
export default CreateThread;