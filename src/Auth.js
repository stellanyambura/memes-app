//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import Signup from './components/Signup';


function App() {

  const [currentForm, setCurrentForm] = useState('login')
  const toggleForm = (formName) => {
    setCurrentForm(formName);
     }

     

  return (
    <div className='App'>
      {
        currentForm === 'login'? <LoginPage onFormSwitch={toggleForm} /> : <Signup onFormSwitch={toggleForm}/>
      }
      

    </div>
  );
}

export default App;
