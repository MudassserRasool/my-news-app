import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({
  showSearchInput,
  setShowSearchInput,
  usaUrl,
  ukUrl,
  searchInputValue,
  handleInput,
  seturl,
}) => {
  return (
    <div>
      {/* Start Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link
                className="nav-item nav-link active "
                aria-current="page"
                to={{ pathname: '/' }}
              >
                Top News
              </Link>
              <Link className="nav-link nav-item" to={{ pathname: '/' }}>
                Categories
              </Link>
              <Link
                className="nav-link nav-item"
                onClick={() => setShowSearchInput(true)}
              >
                Search
              </Link>
              {showSearchInput && (
                <li className="nav-item">
                  <input
                    type="text"
                    className="form-control nav-item"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                    value={searchInputValue}
                    onChange={handleInput}
                  />
                </li>
              )}
            </ul>
            <span className="navbar-text">
              <div
                className="btn-group"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio1"
                  autoComplete="off"
                  defaultChecked
                  onChange={() => seturl(ukUrl)}
                />
                <label className="btn btn-outline-primary" htmlFor="btnradio1">
                  GB
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio2"
                  autoComplete="off"
                  onChange={() => seturl(usaUrl)}
                />
                <label className="btn btn-outline-primary" htmlFor="btnradio2">
                  USA
                </label>
              </div>
            </span>
          </div>
        </div>
      </nav>
      {/* End Navbar */}
    </div>
  );
};

export default Navbar;
