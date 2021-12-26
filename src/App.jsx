import * as React from 'react'
import './App.css';
import Profile from "./components/Content/Profile/profile";
import NavBar from "./components/NavBar/navBar";
import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Content/Dialogs/Dialogs";
import {Route} from "react-router-dom";


const App = (props) => {
    return (
        <div>

            <div className="app-wrapper">
                <div className='header'>
                    <Header/>
                </div>
                <div className='nav'>
                    <NavBar/>
                </div>
                <div className="content">
                    < Route path='/dialogs' render={() => <Dialogs messages={props.messages} dialogsData={props.dialogsData}/>}/>
                    < Route path='/profile' render={() => <Profile posts={props.posts}/>}/>
                </div>
                <div className='footer'>
                    <Footer/>
                </div>

            </div>

        </div>)

}

export default App;