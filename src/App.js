import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import NewPostForm from './Components/NewPostForm/NewPostForm';
import ".//styles.css"

function App() {
 
  const [posts, setPosts] = useState([{userName:'Al Gator', postText:'Feelin ornery because I got all these teeth, but no toothbrush!!!'}])


  //the following function allows the child class to pass information up to the parent class 
  function addNewPost(post) {
    
    let tempPosts = [post, ...posts];
    
    setPosts(tempPosts); 
  }


  return (
    <div> 
      <h1 className='navbar'>GatorGossip</h1>
      <NewPostForm addNewPostProperty={addNewPost}/>
      <DisplayPosts parentPosts={posts} /> 
      <footer>GatorGossip - join the swamp!</footer>       
    </div>
  );
}

export default App;
