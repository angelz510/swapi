import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import People from "./components/People";

function App() {
  const [items, setItems] = useState([]);

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

    setItems(allPeople);
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <div className="App">
      <Header />
      <People items={items} />
    </div>
  );
}

export default App;
