import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../assets/UKAD_logo.svg";

function Header(props) {
  return (
    <div className="header container-fluid">
      <div className="header-nav">
        <img className="logo" alt="logo" src={logo} />
        <div className="nav">
          <Link className={props.page === 1 ? "current" : undefined} to="/">
            Home
          </Link>
          <Link
            className={props.page === 2 ? "current" : undefined}
            to="/products"
          >
            Products
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Header;
