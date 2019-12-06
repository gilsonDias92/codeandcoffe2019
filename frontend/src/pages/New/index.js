import React, { useState } from "react";
import './styles.css';
import camera from '../../assets/camera.svg';

export default function New() {
  const [company, setCompany] = useState("");
  const [techs, setTechs] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit() {}

  return (
    <form onSubmit={handleSubmit}>
      
      <label id="thumbnail">
          <input type="file"/>
          <img src={camera} alt="Selecione uma imagem"/>

      </label>

      <label htmlFor="company">EMPRESA *</label>
      <input
        id="company"
        type="text"
        value={company}
        placeholder="Sua empresa"
        onChange={event => setCompany(event.target.value)}
      />
      <label htmlFor="techs">
        TECNOLOGIAS * <span>(separadas por vírgula)</span>{" "}
      </label>
      <input
        id="techs"
        type="text"
        value={techs}
        placeholder="Quais tecnologias utilizam?"
        onChange={event => setTechs(event.target.value)}
      />
      <label htmlFor="price">
        VALOR DA DIÁRIA * <span>(deixe em branco para GRATUITO)</span>{" "}
      </label>
      <input
        id="price"
        type="text"
        value={price}
        placeholder="Quais tecnologias utilizam?"
        onChange={event => setPrice(event.target.value)}
      />
      <button className="btn" type="submit">
        Cadastrar
      </button>
    </form>
  );
}
