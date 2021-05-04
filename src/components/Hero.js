const Hero = ({ data }) => {
  return (
    <div className="wrapper">
      <div className="bred">
        <div>
          {" "}
          <h2 className="data-name">{data.name}</h2>
          <p className="data-description">{data.description}</p>
        </div>

        <div className="first-image">
          <img src={data.picture} alt={data.name} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
