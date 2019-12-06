import React, { useState } from "react";
import api from "../../services/api";

export default function Login({ history }) {
  const [email, setEmail] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post("/sessions", { email: email });

    // desestruturação, pegando só o id dentro de data
    const { _id } = response.data;

    // armazenar id
    localStorage.setItem("user", _id);

    history.push('/dashboard');

  }
  return (
    <>
      <p>
        Ofereça <strong>spots </strong>
        para desenvolvedores e encontre
        <strong> talentos</strong> para sua empresa!
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          placeholder="Seu melhor e-mail"
          onChange={event => setEmail(event.target.value)}
          value={email}
        />
        <button type="submit" className="btn">
          Entrar
        </button>
      </form>
    </>
  );
}
