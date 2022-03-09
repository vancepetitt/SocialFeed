import React, { useState } from "react";
import "./DisplayPosts.css"

const DisplayPosts = (props) => {

    const [buttonClass, setButtonClass] = useState('inactive');

    function changeToLike(event) {
        if(buttonClass === 'inactive'){
            setButtonClass('liked')
        }
        else {
            setButtonClass('inactive')
        }}

    function changeToDislike(event) {
        if(buttonClass === 'inactive'){
            setButtonClass('disliked')
        }
        else {
            setButtonClass('inactive')
        }}
    
    return (  
        <div>
            <h1>Feed</h1>
            {props.parentPosts.map((post) => {
                return (
                    <div>
                        <li>
                            Username: {post.userName}
                            <br></br> 
                            Post: {post.postText}
                            <br></br>
                            <button classname={buttonClass} onClick={changeToLike}>Like</button>
                            <button classname={buttonClass} onClick={changeToDislike}>Dislike</button>
                        </li>  
                    </div>
                )
            })}
        
        </div>
    );
}
 
export default DisplayPosts;