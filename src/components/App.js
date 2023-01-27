import React, {useState} from 'react';
import Home from "./Home";
import Navbar from './Navbar';
import Auth from '../Auth';




function App() {
  //const [user, setUser] = useState("");
  return (
    <div>
     
      <Navbar />
      <Home/>
     
      <Auth />
      </div>
  )
}
export default App