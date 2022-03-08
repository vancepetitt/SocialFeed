import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import NewPost from './Components/NewPostForm/NewPostForm';


function App() {
 
  const [posts, setPosts] = useState([{userName:'Vance', postText: 'test'}])

  return (
    <div>
      <NewPost />
      <DisplayPosts parentPosts={posts} />
    </div>
  );
}

export default App;
