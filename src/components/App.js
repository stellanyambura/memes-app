import React from 'react';
import { Routes, Route,BrowserRouter} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import Home from "./Home";

import Nav from './Navbar';
//import Auth from '../Auth';
import RandomMemes from './RandomMemes';
import LoginPage from './LoginPage';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav></Nav>
        <Routes>
          <Route path='/loginpage' element={<LoginPage/>}></Route>
          <Route  exact path='/randommemes' element={<RandomMemes/>}></Route>
          <Route  exact path='/home' element={<Home/>}></Route>

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