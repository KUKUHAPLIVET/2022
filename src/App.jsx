import * as React from 'react'
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button'
import Profile from "./components/Content/Profile/profile";
import NavBar from "./components/NavBar/navBar";
import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer";
const App = () => {
    return (
        <div className="app-wrapper">
            <Header className='header'/>


            <NavBar className='nav'/>

            <Profile className='content'/>
            <Footer className='footer'/>

        </div>
    );
}

export default App;