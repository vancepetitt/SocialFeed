import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import NewPostForm from './Components/NewPostForm/NewPostForm';


function App() {
 
  const [posts, setPosts] = useState([{userName:'Vance', postText: 'test'}])

  function addNewPost(post) {
    
    let tempPosts = [post, ...posts];
    
    setPosts(tempPosts); 
  }


  return (
    <div> 
      <NewPostForm addNewPostProperty={addNewPost}/>
      <DisplayPosts parentPosts={posts} />        
    </div>
  );
}

export default App;
