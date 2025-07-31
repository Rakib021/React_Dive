import { useState } from "react"
import Welcome from "./components/Welcome";


export default function App() {
  const [show,setShow] = useState(false);
  return (
    <div>
      <button onClick={() =>setShow((s) =>!s)}>{show ? "Remove" : "Show"}</button>

      <hr />

      {show && <Welcome />}
    </div>
  )
}
