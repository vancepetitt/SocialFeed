import React, { useState } from 'react';


function App() {
 
  const [posts, setPosts] = useState([{name:'Vance', text: 'test'}])

  // <h3>Create a new post:</h3>
  // <a>Name</a>
  // <input></input>
  // <a>Text</a>
  // <input></input>

  return (
    <div>
        <li>
          {posts.map((post) => {
            return (
              <tr>
                <td>{post.name}</td>
                <td>{post.text}</td>
              </tr>
            )
          })}
        </li>
    </div>
  );
}

export default App;
