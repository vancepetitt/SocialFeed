import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import NewPostForm from './Components/NewPostForm/NewPostForm';


function App() {
 
  const [posts, setPosts] = useState([{userName:'Vance', postText:'test text'}])


  //the following function allows the child class to "invoke" the parent class 
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
