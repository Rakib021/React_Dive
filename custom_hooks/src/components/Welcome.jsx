import { useRef } from "react";
import useFadeAnimation from "../hooks/useFadeAnimation";

export default function Welcome() {
  const ref = useRef(null);
useFadeAnimation(ref,1000);

  return (
    <h1 className="welcome" ref={ref}>
      Welcome
    </h1>
  );
}
