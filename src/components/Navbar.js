import React, { Component } from 'react';
import { Link } from 'react-router-dom';


// Navigation bar component
export default class Navbar extends Component {
    render() {
        return (
          <div className="Navigation">
            <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-colour">
              <div class="container-fluid">

                <a class="navbar-brand" href="#">NEWSHUB</a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul class="navbar-nav">

                    <li class="nav-item">
                      <Link to="" class="nav-link active" aria-current="page">Most Popular</Link>
                    </li>

                    <li class="nav-item">
                      <Link to="/Features" class="nav-link">Features</Link>
                    </li>

                    <li class="nav-item">
                      <Link to="/About" class="nav-link">About Us</Link>
                    </li>

                    <li class="nav-item dropdown">

                      <Link class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        News Categories
                      </Link>

                      <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                        <li><Link to="/Business" class="dropdown-item">Business</Link></li>
                        <li><Link to="/Health" class="dropdown-item">Health</Link></li>
                        <li><Link to="/Politics" class="dropdown-item">Politics</Link></li>
                        <li><Link to="/Science" class="dropdown-item">Science</Link></li>
                        <li><Link to="/Tech" class="dropdown-item">Tech</Link></li>

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
