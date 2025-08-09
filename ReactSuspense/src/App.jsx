import React, { useState } from 'react'
import PostSelector from './components/PostSelector';

export default function App() {
  const [selectedPostId, setSelectedPostId] = useState(null);

  const handleSelectPost =(e) =>{
    setSelectedPostId(e.target.value);
    

  }
  return (
    <div>
      <h1>Welcome To the React Suspense</h1>

      <div>
        <PostSelector onSelectPost = {handleSelectPost}/>
      </div>
    </div>
  )
}

