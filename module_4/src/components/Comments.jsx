import React, { useEffect, useState } from "react";
import { data } from "../utils/fetchComments";

export default function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    //Feching the data
    async function startFetching() {
      const json = await data(1);
      setComments(json);
    }

    startFetching();
  }, []);
  return (
    <div>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.name}</li>
        ))}
      </ul>
    </div>
  );
}
