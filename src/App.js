import { useState, useEffect } from "react";
import "./App.css";
import "./index.css";
import axios from "axios";
import Header from "./components/Header";
import Content from "./components/Content";
import Hero from "./components/Hero";

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
      <Hero data={data.restaurant} />
      <Content data={data.categories} />
    </div>
  );
};

export default App;
