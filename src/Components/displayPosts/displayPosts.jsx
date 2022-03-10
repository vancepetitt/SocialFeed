import React, { useState } from "react";
import DislikeButton from "../Buttons/DislikeButton";
import LikeButton from "../Buttons/LikeButton";


const DisplayPosts = (props) => {

    let timeStamp = Date()
    
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
                            <p>{timeStamp}</p>
                            <LikeButton />
                            <DislikeButton />
                        </li>  
                    </div>
                )
            })}
        
        </div>
    );
}
 
export default DisplayPosts;