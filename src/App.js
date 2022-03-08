import React, { useState } from 'react';
import displayPosts from './Components/displayPosts/displayPosts';


function App() {
 
  const [posts, setPosts] = useState([{userName:'Vance', postText: 'test'}])

  return (
    <div>
      <newPost />
      <displayPosts />
    </div>
  );
}

export default App;
