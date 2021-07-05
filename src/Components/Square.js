import React from "react";
import "./Styles/Square.css";

const Square = ({ src, alt, name, origin, specie, gender, planet }) => {
  return (
    <div className="square">
      <img className="img-square" src={src} alt={alt} />
      <span className="info-square">
        <span>Nombre: {name}</span>
        <span>Origen: {origin}</span>
        <span>Especie: {specie}</span>
        <span>Sexo: {gender}</span>
        <span>Planeta: {planet}</span>
      </span>
    </div>
  );
};
export default Square;
