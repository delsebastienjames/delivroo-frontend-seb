// import d'une image
import logoDelivroo from "../assets/img/logo.svg";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="wrapper">
          <div className="logo">
            <img src={logoDelivroo} alt="logo delivroo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
