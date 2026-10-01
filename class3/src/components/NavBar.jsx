import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header className="site-header">
      <div className="container container--wide">
        <nav className="nav" aria-label="Primary">

          <Link className="brand" to="/">
            <span className="brand-mark" aria-hidden="true"></span>
            Brivon
          </Link>

          <div className="nav-links" role="navigation">
            <Link to="/">Index</Link>
            <Link to="/work">Work</Link>
            <Link to="/studio">Studio</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="nav-cta-row">
            <Link
              to="/contact"
              className="btn btn--primary btn--sm"
            >
              Start a project

              <svg
                className="arrow"
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <button
              className="nav-toggle"
              aria-label="Open menu"
              aria-expanded="false"
              aria-controls="mobile-drawer"
            >
              <span aria-hidden="true"></span>
            </button>
          </div>

        </nav>
      </div>
    </header>
  );
}

export default NavBar;
