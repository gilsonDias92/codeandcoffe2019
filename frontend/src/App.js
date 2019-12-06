import React from "react";
import "./App.css";
import logo from "./assets/logo3x.png";
import Routes from './routes';

function App() {
  
  return (
    <div className="container">
      <img src={logo} alt="codeAndCoffe" />
      <div className="content">
        <Routes />
      </div>
    </div>
  );
}
export default App;
