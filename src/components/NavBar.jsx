import { Link } from "react-router-dom";
import logo from "../images/reactjs.jpeg"; // Importing the logo image

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
        <img
          src={logo}
          alt="React logo consisting of a blue atom symbol with three elliptical orbits, displayed on a white background in a navigation bar. The logo conveys a modern and energetic tone"
          style={{ width: "90px", height: "60px", margin: "10px" }}
        />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", listStyle: "none" }}>
            <li className="nav-item">
              <Link style={{ listStyle: "inline" }} className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link style={{ listStyle: "inline" }} className="nav-link" to="/movies">Movies</Link>
            </li>
            <li className="nav-item">
              <Link style={{ listStyle: "inline" }} className="nav-link" to="/accountsettings">Account Settings</Link>
            </li>
            <li className="nav-item">
              <Link style={{ listStyle: "inline" }} className="nav-link" to="/favs">Favorites</Link>
            </li>
            <li className="nav-item">
              <Link style={{ listStyle: "inline" }} className="nav-link" to="/landing">Landing</Link>
            </li>
            <li className="nav-item">
              <Link style={{ listStyle: "inline" }} className="nav-link" to="/profile">Profile</Link>
            </li>
            <li className="nav-item">
              <Link style={{ listStyle: "inline" }} className="nav-link" to="/images">Images</Link>
            </li>
            <li className="nav-item">
              <Link style={{ listStyle: "inline" }} className="nav-link" to="/sitemap">Sitemap</Link>
            </li>
            <li className="nav-item">
              <Link style={{ listStyle: "inline" }} className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link style={{ listStyle: "inline" }} className="nav-link" to="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
