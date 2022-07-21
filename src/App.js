import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const results = await axios(`https://swapi.dev/api/people`);

      setItems(results.data);
      console.log(results.data);
    };
    fetchItems();
  }, []);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
