import * as React from 'react'
import s from "./navBar.module.css"
import "./navbar.css"
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (

        <div className={s.nav}>
            <div  className={s.item}>
                <NavLink  activeClassName={s.active} to="/profile"  >Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink  activeClassName={s.active} to="/dialogs/"  >Dialogs</NavLink>
            </div>
            <div className={s.item}>Music</div>
            <div className={s.item}>Settings</div>
            <div className={s.item}>Games</div>

        </div>


    )
}
export default NavBar