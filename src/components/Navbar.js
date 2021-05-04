import React, { Component } from 'react';
import { Link } from 'react-router-dom';


// Navigation bar component
export default class Navbar extends Component {
    render() {
        return (
          <div className="Navigation">
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light navbar-colour">
              <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                  NEWSHUB
                </Link>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDropdown"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link
                        to=""
                        className="nav-link active"
                        aria-current="page"
                      >
                        Most Popular
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/Search" className="nav-link">
                        Search
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/Weather" className="nav-link">
                        Weather
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/Features" className="nav-link">
                        Features
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/About" className="nav-link">
                        About Us
                      </Link>
                    </li>

                    <li className="nav-item dropdown">
                      {/* leave as an (a) element, as link doesnt work */}
                      <a
                        className="nav-link dropdown-toggle"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        News Categories
                      </a>

                      <ul
                        className="dropdown-menu dropdown-menu-right"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <li>
                          <Link to="/Business" className="dropdown-item">
                            Business
                          </Link>
                        </li>
                        <li>
                          <Link to="/Health" className="dropdown-item">
                            Health
                          </Link>
                        </li>
                        <li>
                          <Link to="/World" className="dropdown-item">
                            World
                          </Link>
                        </li>
                        <li>
                          <Link to="/Science" className="dropdown-item">
                            Science
                          </Link>
                        </li>
                        <li>
                          <Link to="/Tech" className="dropdown-item">
                            Tech
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        );
    }
}
