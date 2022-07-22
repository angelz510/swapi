import React from "react";

const People = ({ items }) => {
  return (
    <div className="cards-container">
      {items.results?.map((item, index) => (
        <div key={index} className="people-card">
          <p className="people-name">{item.name}</p>
          <p>Birth Year: {item.birth_year}</p>
          <p>Homeworld: {item.homeworld.name}</p>
          <p>Height: {item.height}cm</p>
        </div>
      ))}
    </div>
  );
};

export default People;
