import MyPost from "./MyPosts/myPosts";

const Profile =(props) =>{
    return(
        <div> <MyPost posts={props.posts}/> </div>
    )
}
export default Profile