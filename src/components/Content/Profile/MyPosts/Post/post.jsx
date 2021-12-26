import s from "./post.module.css"
import Avatar from "@mui/material/Avatar";
import {green} from "@mui/material/colors";


const Post = (props) => {
    return (
        <div className={s.main}>
            <div className={s.avatar}><Avatar src="http://paranormal-news.ru/_nw/101/03374637.jpg"/>
                <div className={s.name}>рыба</div>
            </div>
            <div className={s.item}>
                <div>
                    {props.message}
                </div>
                <div>{props.likesCount}</div>
            </div>
        </div>
    )
}

export default Post