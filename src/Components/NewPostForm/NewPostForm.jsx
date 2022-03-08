import React, {useState} from "react";

const NewPostForm = (props) => {
    
    const [userName, setName] = useState('');
    const [postText, setText] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            userName: userName,
            postText: postText,
        };
        console.log(newPost)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label for='userName'>Name: </label>
            <input type='text' value={userName} onChange={(event) => setName(event.target.value)}/>
            <br></br>
            <label for='postText'>Post: </label>
            <input type='text' value={postText} onChange={(event) => setText(event.target.value)}/>
            <button type='submit'>Post</button>
        </form>

     );
}
 
export default NewPostForm;