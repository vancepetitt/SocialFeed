import React, {useState} from "react";
import "./Buttons.css";

const LikeButton = (props) => {
    
    const [buttonClass, setButtonClass] = useState('inactive');

    function changeToLike(event) {
        if(buttonClass === 'inactive'){
            setButtonClass('liked')
        }
        else {
            setButtonClass('inactive')
        }}
            
    return(
        <div>
            <button classname={buttonClass} onClick={changeToLike}>Like</button>
        </div>
    );
};

export default LikeButton

