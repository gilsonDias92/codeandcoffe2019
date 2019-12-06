import React, { useState, useMemo } from "react";
import "./styles.css";
import camera from "../../assets/camera.svg";
import api from "../../services/api";

export default function New({ history }) {
  const [company, setCompany] = useState("");
  const [techs, setTechs] = useState("");
  const [price, setPrice] = useState("");
  const [thumbnail, setThumbnail] = useState(null);

  // pré-visualizção da imagem no input
  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  async function handleSubmit(event) {
    
    event.preventDefault();
    const data = new FormData();
    const user_id = localStorage.getItem("user");

    data.append("thumbnail", thumbnail);
    data.append("company", company);
    data.append("techs", techs);
    data.append("price", price);

    await api.post("/spots", data, {
      headers: { user_id }
    });

    history.push("/dashboard");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label
        id="thumbnail"
        style={{ backgroundImage: `url(${preview})` }}
        className={thumbnail ? "has-thumbnail" : ""}
      >
        <input
          type="file"
          onChange={event => setThumbnail(event.target.files[0])}
        />
        <img src={camera} alt="Selecione uma imagem" />
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
