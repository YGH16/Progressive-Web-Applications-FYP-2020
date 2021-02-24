import React, { Component } from 'react'

export default class Caro extends Component {
    render() {
        return (
          <div>
            <div
              id="carouselExampleDark"
              className="carousel carousel-dark slide"
              data-bs-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="1"
                ></li>
                <li
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="2"
                ></li>
              </ol>

              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                  <div className="card">
                    <div className="card-content">
                      <p className="title">
                        “There are two hard things in computer science: cache
                        invalidation, naming things, and off-by-one errors.”
                      </p>
                      <p className="subtitle">Jeff Atwood - BBC NEWS</p>
                    </div>
                  </div>
                </div>

                <div className="carousel-item" data-bs-interval="2000">
                  <div className="card">
                    <div className="card-content">
                      <p className="title">
                        “There are two hard things in computer science: cache
                        invalidation, naming things, and off-by-one errors.”
                      </p>
                      <p className="subtitle">Jeff Atwood</p>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="card">
                    <div className="card-content">
                      <p className="title">
                        “There are two hard things in computer science: cache
                        invalidation, naming things, and off-by-one errors.”
                      </p>
                      <p className="subtitle">Jeff Atwood</p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleDark"
                role="button"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleDark"
                role="button"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </a>
            </div>
          </div>
        );
    }
}
