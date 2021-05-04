const Hero = ({ data }) => {
  return (
    <div className="montorgeuil">
      <div className="wrapper">
        <div className="bred">
          <div>
            <br />
            <h2 className="data-name">{data.name}</h2>
            <br />
            <p className="data-description">{data.description}</p>
          </div>
          <img style={{ height: 200 }} src={data.picture} alt={data.name} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
