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
  const [cart, setCart] = useState([]);

  let total = 0; // variable pout le calcul du panier

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

  // fonction pour aller chercher les menus et afficher les prix
  const addToCart = (item) => {
    // console.log("Item depuis App.js : ", item);
    const newCart = [...cart];
    // Est-ce que item n'existe pas déjà dans le panier ?
    // .find() va retourner un objet qui match avec la condition
    const exist = newCart.find((elem) => elem.id === item.id);
    // autre méthode : boucle for
    if (exist) {
      // on va modifier la quantité
      exist.quantity++;
      setCart(newCart);
    } else {
      // Ajouter dans le panier (dans cart)
      // Modifier la copie
      // je push dans le tableau item + une clé quantity: 1
      // item.quantity = 1;
      // newCart.push(item);
      newCart.push({ ...item, quantity: 1 });
      // Mettre à jour cart avec la copie
      setCart(newCart);
    }
  };

  // fonction qui permet de faire disparaitre les menus en dessous de 1 quantité
  const substractFromCart = (item) => {
    const newCart = [...cart];
    const exist = newCart.find((elem) => elem.id === item.id);

    if (item.quantity === 1) {
      // supprimer item du tableau cart
      const index = newCart.indexOf(exist);
      newCart.splice(index, 1);
      setCart(newCart);
    } else {
      // décrémenter la quantité
      exist.quantity--;
      setCart(newCart);
    }

    //setCart(newCart);
  };

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div>
      <Header />
      <Hero data={data.restaurant} />
      <div style={{ display: "flex" }}>
        <Content data={data.categories} addToCart={addToCart} />
        <div className="cart">
          {cart.map((item, index) => {
            total += item.quantity * item.price;
            return (
              <div className="menu-item">
                <button onClick={() => substractFromCart(item)} className="air">
                  -
                </button>
                <span className="air">{item.quantity}</span>
                <button onClick={() => addToCart(item)} className="air">
                  +
                </button>
                <span className="air-title">{item.title}</span>
                <span className="price">{item.price} €</span>
              </div>
            );
          })}
          <span className="menu-item price-total">{total.toFixed(2)} €</span>
        </div>
      </div>
    </div>
  );
};

export default App;
