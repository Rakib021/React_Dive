import React, { useEffect, useState } from 'react'

export default function PostSelector({onSelectPost}) {
  const [posts, setPosts] = useState([]);
  const [isPostLoading, setIsPostLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() =>{
setIsPostLoading(true);

    const fetchPosts = async() =>{
      try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");

        const data = await response.json();


        if(response.ok){
          setIsPostLoading(false);
          setPosts(data);
        } else {
          setIsPostLoading(false);
          setError('Failed to fetch posts');
        }
      } catch(err) {
        setIsPostLoading(false);
        setError(err.message);
      }
    }

    fetchPosts();
  },[])


  let postContent;
  if(isPostLoading) {
    postContent = <p>Post Loading ...</p>
  }
  else if(!isPostLoading && error) {
    postContent = <p>{error}</p>;

  } 

  else{
    postContent = (
     <select  onChange={onSelectPost}>
      <option value="">Select Posts</option>

      {posts.map(post =>(
        // console.log(post);
        <option value={post.id} key={post.id}>{post.title}</option>
      ))}
     </select>
    );
  }


  return (
    <div>
      {postContent}
    </div>
  );
}