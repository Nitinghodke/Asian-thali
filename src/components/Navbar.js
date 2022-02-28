import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const thali = useSelector((state) => state.counter.thali);
  console.log(thali.length)
  return (
    <div className="text-center">
      <nav className="navbar navbar-expand-lg navbar-light navBar">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="#"
            style={{ order: "1px solid red", borderRadius: "50px" }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4vsg9yYdtM7N-YsFUvP9Lu3dPjj6fUFsA3o1yh2zWUoA06PdzZlafRLo5Y7hJI7IDkd0&usqp=CAU"
              width="70px"
              height="70px "
              className="logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-00 my-3">
              <li className="nav-item">
                <Link
                  style={{ fontSize: "20px", fontWeight: "bold" }}
                  className="nav-link"
                  aria-current="page"
                  to="/"
                >
                  Home Page
                </Link>
              </li>
              <li
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
                className="nav-item"
              >
                <Link className="nav-link" to="/Menu">
                  Special Dishes
                </Link>
              </li>
              <li
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
                className="nav-item"
              >
                
              </li>
              <li
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
                className="nav-item"
              >
                 
              </li>
               
              <li className="nav-item" style={{float:'right'}} >
                <Link className="nav-link" to="/Cart">
                  <img
                    src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-cart-sale-and-shopping-xnimrodx-lineal-color-xnimrodx.png"
                    width={"40px"}
                    height={"40px"}
                  />
                </Link>
              </li>{" "}
              <h6 style={{ color: "red",paddingBottom:'5px' }}>{thali.length}</h6>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
