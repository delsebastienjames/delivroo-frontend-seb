const Hero = ({ data }) => {
  return (
    <div className="wrapper">
      <h2 className="data-name">{data.name}</h2>
      <p className="data-description">{data.description}</p>
      <div className="first-img">
        <img style={{ height: 200 }} src={data.picture} alt={data.name} />
      </div>
    </div>
  );
};

export default Hero;
