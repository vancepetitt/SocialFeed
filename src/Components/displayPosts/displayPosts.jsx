const displayPosts = (props) => {
    return (  
        <li>
            {posts.userName}
            {posts.postText}
        </li>   
    );
}
 
export default displayPosts;