
import React from 'react';
import { Routes, Route,BrowserRouter} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import Home from "./Home";
import LoginPage from './LoginPage';
import React, {useState} from 'react';

import Nav from './Navbar';
//import Auth from '../Auth';
import RandomMemes from './RandomMemes';





function App() {
  //const [user, setUser] = useState("");
  return (
    <div>
      <BrowserRouter>
      <Nav></Nav>
        <Routes>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route  exact path='/randommemes' element={<RandomMemes/>}></Route>
          <Route  exact path='/home' element={<Home/>}></Route>

          <Route exact path='' element={<Home/>}></Route>
        </Routes>
       
       </BrowserRouter> 
     
      {/* <Navbar />
      <Home/>
     
      <Auth />
      <RandomMemes /> */}
      </div>

  )
}
export default App