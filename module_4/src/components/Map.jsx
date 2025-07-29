import React, { useEffect, useRef } from "react";
import map from "../assets/map.jpg";

export default function Map() {
  const myRef = useRef(null);

  useEffect(() => {
    myRef.current.setZoomLevel(0.5);
  }, []);


  return (
    <div>
      <img ref={myRef} src={map} alt="" width={400} />
    </div>
  );
}
