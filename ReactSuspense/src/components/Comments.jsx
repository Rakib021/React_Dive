
import React, { useEffect, useState } from 'react'

export default function Comments() {
  const [comments,setComments] = useState([]);
  const [isCommentLoading,setIsCommentLoading] = useState(false);
  const [commentError,setCommentError] = useState(null);


useEffect(() =>{

  const fetchComments =  async() =>{
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=5');

      const data = await response.json();

      if(response.ok){
        setIsCommentLoading(false);
        setComments(data);
      }
      else{
        setIsCommentLoading(false);
        setCommentError('Failed to fetch comments');
      }
    }catch(err){
      setCommentError(err.message);
      setIsCommentLoading(false);
    }
  }
  fetchComments();

},[])

let commentsContent;

if(isCommentLoading){
  commentsContent = <p>Comments Loading...</p>
}
else if(!isCommentLoading && commentError){
  commentsContent = <p>{commentError}</p>
}

else{
  commentsContent =(
    <ul>
      {comments.map(comment =>{
        <li key ={comment.id}>{comment.name}</li>
      })}
    </ul>
  )
}

  return (
    <div>
      <h1>Comments</h1>

      <div>{commentsContent}</div>
    </div>
  )
}
