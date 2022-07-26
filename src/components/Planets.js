import React from "react";

const Planets = ({ planets }) => {
  return (
    <div className="planet-cards-container">
      {planets.map((planet, index) => (
        <div key={index} className="planet-card">
          <p className="planet-name">{planet.name}</p>
          <p>Population: {planet.population}</p>
          <p>Terrain: {planet.terrain}</p>
          <p>Climate: {planet.climate}</p>
        </div>
      ))}
    </div>
  );
};

export default Planets;
