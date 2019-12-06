import React, { useState } from "react";
import "./App.css";
import api from './services/api';

import logo from "./assets/logo3x.png";

function App() {
  const [email, setEmail] = useState('');

  async  function handleSubmit(event){
    event.preventDefault();
    const response = await api.post('/sessions', {
      email
    });
    const { _id } = response.data;
    console.log('id: ' + _id);
  }

  return (
    <div className="container">
      <img src={logo} alt="codeAndCoffe" />
      <div className="content">
        <p>
          Ofereça <strong>spots </strong>
          para desenvolvedores e encontre <strong> talentos</strong> para sua
          empresa!
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail</label>
          <input 
          type="email" 
          id="email" 
          placeholder="Seu melhor e-mail"
          onChange={event => setEmail(event.target.value)}
          value={email}  />
          <button type="submit" className="btn">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
