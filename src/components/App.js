
import React from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom"
import '../App.css';

import React, {useState} from 'react';
import { Routes, Route,BrowserRouter} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import '../index.css'
import Home from "./Home";
import LoginPage from './LoginPage';



import RandomMemes from './RandomMemes';
import LoginPage from './LoginPage';
import HomePage from './Home';
import Nav from './Navbar';
import Signup from './Signup';

function App() {
    return (
        <div>
          
        
            <BrowserRouter>
            <Nav/>
                <Routes>
                    <Route path='/login' element={<LoginPage/>}/>
                    <Route path='/randommemes' element={<RandomMemes/>}/>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path = '/signup' element={<Signup/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
