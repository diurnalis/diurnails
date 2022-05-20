import "./navbar.css";
import {Routes,Route,Link,Outlet} from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ps-2 pe-5">
        <Link className="navbar-brand nav-link active textcolor" to= "/" >Diurnails</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end me-3" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link active textcolor" to= "/" >Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active textcolor" to= "/articles" >Articles</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active textcolor" to= "/contactus" >Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
