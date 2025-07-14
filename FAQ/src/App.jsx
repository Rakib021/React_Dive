import { useState } from "react";

export default function SyncedInputs() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <>
      <Input value={text} onChange={handleChange} label="First input" />
      <Input value={text} onChange={handleChange} label="Second input" />
    </>
  );
}

function Input({ label,value,onChange }) {
  return (
    <label>
      {label} <input value={value} onChange={onChange} />
    </label>
  );
}
