import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import People from "./components/People";

function App() {
  const [items, setItems] = useState([]);

  const fetchPeople = async () => {
    let results = await axios(`https://swapi.dev/api/people`);

    for (let i = 0; i < results.data.results.length; i++) {
      const result = await axios.get(`${results.data.results[i].homeworld}`);
      results.data.results[i].homeworld = result.data;
    }

    setItems(results.data);
    console.log(results.data);
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
