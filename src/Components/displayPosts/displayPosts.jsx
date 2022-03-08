const displayPosts = (props) => {


    return (  
        <div>
            <h1>Feed</h1>
            {props.parentPosts.map((post) => {
                return (
                    <div>
                    <li>
                       Username: {post.userName}
                    </li> 
                    <li>
                       Post: {post.postText}
                    </li>  

                    </div>
                )
            })}
        
        </div>
    );
}
 
export default displayPosts;