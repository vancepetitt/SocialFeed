import React, {useState} from "react";
import "./Buttons.css";

const DislikeButton = (props) => {
    
    const [buttonClass, setButtonClass] = useState('inactive');

    function changeToDislike(event) {
        if(buttonClass === 'inactive'){
            setButtonClass('disliked')
        }
        else {
            setButtonClass('inactive')
        }}
            
    return(
        <div>
            <button classname={buttonClass} onClick={changeToDislike}>Dislike</button>
        </div>
    );
};

export default DislikeButton