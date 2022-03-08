const displayPosts = (props) => {
    return (  
        <div>
            <h1>Feed</h1>
            {props.parentPosts.map((posts) => {
                return (
                    <div>
                    <li>
                       Username: {posts.userName}
                    </li> 
                    <li>
                       Post: {posts.postText}
                    </li>  

                    </div>
                )
            })}
        
        </div>
    );
}
 
export default displayPosts;