//import logo from './logo.svg';
import './App.css';

import LoginPage from './components/LoginPage';
import Home from './components/Home';
import Signup from './components/Signup';
import {BrowserRouter,Routes,Route} from "react-router-dom";

function Auth() {

 

  return (

    <BrowserRouter>
    <Routes>
      <Route exact path='/signup' element={<Signup/>}/>
      <Route exact path='/login' element={<LoginPage/>}/>
      <Route exact path='/home' element={<Home />}/>
    </Routes>
    </BrowserRouter>
    // <div className='App'>
    //   {
    //     currentForm === 'login'? <LoginPage onFormSwitch={toggleForm} /> : <Signup onFormSwitch={toggleForm}/>
    //   }
      

    // </div>
  );
}

export default Auth;