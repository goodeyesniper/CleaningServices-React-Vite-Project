import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-white shadow w-100 ${isSticky ? "sticky-navbar" : ""}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <div className="d-flex flex-column px-3">
              <strong className="banner-text-color banner-text">Sollano</strong>
              <strong className="banner-subtitle-text">Cleaning Services Ltd.</strong>
            </div>
          </Link>
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto text-center nav-items">
              <li className="nav-item">
                <Link className="nav-link px-5 hover-link" aria-current="page" to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-5 hover-link" to="/about">ABOUT US</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-5 hover-link" to="/services">SERVICES</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-5 hover-link" to="/contact">CONTACT</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-5 hover-link" to="/booking">BOOKING</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <style>
        {`
          .sticky-navbar {
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1000;
            transition: all 0.3s ease-in-out;
            animation: slideDown 0.3s ease-in-out;
          }

          @keyframes slideDown {
            from {
              transform: translateY(-100%);
            }
            to {
              transform: translateY(0);
            }
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
