import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://delivroo-backend-seb.herokuapp.com/"
      );
      // console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div>
      <h2>{data.restaurant.name}</h2>
      <h2>{data.restaurant.categories}</h2>
    </div>
  );
};

export default App;
