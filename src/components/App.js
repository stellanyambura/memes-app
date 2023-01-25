import React from 'react';
import Home from "./Home";
import Navbar from './Navbar';
import Auth from '../Auth';
import RandomMemes from './RandomMemes';


function App() {
  return (
    <div>
     
      <Navbar />
      <Home/>
      <Auth />
      <RandomMemes />
      </div>
  )
}
export default App