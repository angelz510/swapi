import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import People from "./components/People";
import Planets from "./components/Planets";

function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);

  const fetchPeople = async () => {
    let i = 1;
    let allPeople = [];
    while (i < 10) {
      let res = await axios(`https://swapi.dev/api/people/?page=${i}`);
      allPeople.push(...res.data.results);
      i++;
    }

    for (let i = 0; i < allPeople.length; i++) {
      const result = await axios.get(`${allPeople[i].homeworld}`);
      allPeople[i].homeworld = result.data;
    }

    setPeople(allPeople);
    console.log(allPeople);
  };

  const fetchPlanets = async () => {
    let i = 1;
    let allPlanets = [];
    while (i < 7) {
      let res = await axios(`https://swapi.dev/api/planets/?page=${i}`);
      allPlanets.push(...res.data.results);
      i++;
    }

    setPlanets(allPlanets);
    console.log(allPlanets);
  };

  useEffect(() => {
    fetchPeople();
    fetchPlanets();
  }, []);

  return (
    <div className="App">
      <Header />
      <h1 style={{ textAlign: "center" }}>People</h1>
      <People people={people} />
      <h1 style={{ textAlign: "center" }}>Planets</h1>
      <Planets planets={planets} />
    </div>
  );
}

export default App;
