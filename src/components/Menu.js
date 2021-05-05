const Menu = ({ data }) => {
  return (
    <div>
      {data.map((item) => {
        return (
          // si j'ai un id, je l'utilise
          // sinon, je peux utiliser l'index
          <div
            key={item.id}
            onClick={() => {
              console.log(item.id);
              // ajouter l'élément dans un tableau
              // ce tableau sera parcouru pour afficher le panier
            }}
          >
            <div className="bgc">
              <div className="wrapper">
                <div className="menus">
                  <h4 className="item-title">{item.title}</h4>
                  <p className="item-description">{item.description}</p>
                  <span className="item-price">{item.price}</span>

                  {item.picture && (
                    <img
                      style={{ height: 120 }}
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
