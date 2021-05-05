import Menu from "./Menu";

const Content = ({ data, addToCart }) => {
  return (
    <div className="background-grey">
      <div className="wrapper">
        {data.map((category, index) => {
          return (
            // if inline (if sans else)
            category.meals.length > 0 && (
              <div key={index}>
                <h3 className="category-name">{category.name}</h3>
                <Menu data={category.meals} addToCart={addToCart} />
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default Content;
