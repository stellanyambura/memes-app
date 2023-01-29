import React from "react";
//import { Button } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css";
//import LoginPage from './LoginPage';
//import RandomMemes from './RandomMemes';
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-page">
    <h1>MEMESAPP</h1>
    <h2>WELCOME TO OUR PAGE!</h2>
    <div>
<div>
  < button className="login" to= "/login">Login</button>
  </div>
<div>
  <button to="/randomMemes">RandomMemes</button>
  </div>
    </div>
    {/* {currentSection === 'Login' && <Login globalData={globalData} />}
        {currentSection === 'RandomMemes' && <RandomMemes />}
      <Login globalData={globalData} /> */}
    </div>
  );
}
export default HomePage;
