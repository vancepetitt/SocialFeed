const displayPosts = (props) => {


    function changeToLike(event) {
        alert('liked');
    };

    function changeToDislike(event) {
        alert('dislike');
    }
    
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
                            <button onClick={changeToLike}>Like</button>
                            <button onClick={changeToDislike}>Dislike</button>
                        </li>  
                    </div>
                )
            })}
        
        </div>
    );
}
 
export default displayPosts;