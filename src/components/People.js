import React from "react";

const People = ({ people }) => {
  return (
    <div className="cards-container">
      {people.map((person, index) => (
        <div key={index} className="people-card">
          <p className="people-name">{person.name}</p>
          <p>Birth Year: {person.birth_year}</p>
          <p>Homeworld: {person.homeworld.name}</p>
          <p>Height: {person.height}cm</p>
        </div>
      ))}
    </div>
  );
};

export default People;
