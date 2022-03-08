const NewPost = (props) => {
    return ( 
        <form>
            <label for='userName'>Name: </label>
            <input type='text' name='userName'></input>
            <br></br>
            <label for='postText'>Post: </label>
            <input type='text' name='postText'></input>
        </form>

     );
}
 
export default NewPost;