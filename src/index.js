import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";


let posts = [
    {id:1, message : "HI, hi", likesCount:122},
    {id:2, message : "HI, fdsfdshi", likesCount:11},
    {id:3, message : "HI, hsdffsdi", likesCount:167},
    {id:4, message : ", hasdasi", likesCount:111},
    {id:5, message : "HdfsI, hi", likesCount:45}
]

let dialogsData = [
    {id: 1, name: "Dima"},
    {id: 2, name: "Danil"},
    {id: 3, name: "Vasya"},
    {id: 4, name: "Sveta"},
    {id: 5, name: "Katya"},
    {id: 6, name: "Vika"},
]
let Messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "HG"},
    {id: 3, message: "VsFD"},
    {id: 4, message: "Svesdfsda"},
    {id: 5, message: "Kdsfdsa"},
    {id: 6, message: "sdfsd"},
]

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App posts={posts} messages={Messages} dialogsData={dialogsData}/>
        </BrowserRouter>
    </React.StrictMode>
    ,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
