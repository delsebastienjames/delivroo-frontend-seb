const Menu = ({ data, addToCart }) => {
  return (
    <div className="menu-container">
      {data.map((item) => {
        return (
          // si j'ai un id, je l'utilise
          // sinon, je peux utiliser l'index
          <div
            className="menu-item"
            key={item.id}
            onClick={() => {
              //console.log(item.id);
              // console.log(item);
              // ajouter l'élément dans un tableau cart (App.js)
              // ce tableau sera parcouru pour afficher le panier
              addToCart(item);
            }}
          >
            <div className="bgc">
              <div className="wrapper">
                <div className="menus">
                  <div className="card">
                    <h4 className="item-title">{item.title}</h4>
                    <p className="item-description">{item.description}</p>
                    <span className="item-price">{item.price}</span>
                  </div>

                  {item.picture && (
                    <img
                      style={{ height: 120, width: 100 }}
                      src={item.picture}
                      alt={item.title}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
