import s from './dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={`${s.dialogsItem} ${s.activeName}`}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>)
}

const Message = (props) => {
    return (
        <div>
            <div className={s.message}>{props.message}</div>

        </div>
    )
}




const Dialogs = (props) => {
    let dialogsElements = props.dialogsData
        .map(dialog=> <DialogItem name ={dialog.name} id={dialog.id}/>)


    let messagesElements= props.messages.map(
        m=> <Message message={m.message}/>
    )
    return (
        <div className={s.dialogsMain}>
            <div className={s.dialogs}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs