import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";

const App = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://delivroo-backend-seb.herokuapp.com/"
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div>
      <Header />
      <h2>{data.restaurant.name}</h2>
      <h2>{data.restaurant.categories}</h2>
    </div>
  );
};

export default App;
