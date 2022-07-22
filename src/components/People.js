import React from "react";

const People = ({ items }) => {
  return (
    <div className="cards-container">
      {items.results?.map((item, index) => (
        <div key={index}>
          <h1>{item.name}</h1>
          <p>Birth Year: {item.birth_year}</p>
          <p>Homeworld: {item.homeworld.name}</p>
          <p>Height: {item.height}</p>
        </div>
      ))}
    </div>
  );
};

export default People;
