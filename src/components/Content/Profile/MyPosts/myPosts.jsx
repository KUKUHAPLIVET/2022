import Post from "./Post/post";
import Button from "@mui/material/Button";
import s from "./myPosts.module.css"





const MyPost = (props) => {
    let PostsElements = props.posts
        .map( p => <Post message={p.message} likesCount ={p.likesCount}/>)

    return (
        <div>
            My posts
        <textarea></textarea>
           <div className={s.buttonAdd}><Button variant="outlined">Add post</Button></div>
            <div>
                {PostsElements}
            </div>
        </div>
    )
}
export default MyPost

