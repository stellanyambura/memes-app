import React, {useState} from 'react';
import Home from "./Home";

import Nav from './Navbar';
//import Auth from '../Auth';
import RandomMemes from './RandomMemes';
import LoginPage from './LoginPage';




function App() {
  //const [user, setUser] = useState("");
  return (
    <div>
      <BrowserRouter>
      <Nav></Nav>
        <Routes>
          <Route path='/loginpage' element={<LoginPage/>}></Route>
          <Route  exact path='/randommemes' element={<RandomMemes/>}></Route>
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