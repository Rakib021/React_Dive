import { useState } from "react";

export default function AddTasks({ onAddTask }) {
  const [text, setText] = useState("");
  const handleChangeText = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <input placeholder="Add Task" value={text} onChange={handleChangeText} />
      <button
        onClick={() => {
          setText("");
          onAddTask(text);
        }}
      >
        Add
      </button>
    </>
  );
}
