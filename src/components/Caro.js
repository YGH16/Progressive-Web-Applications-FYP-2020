import React, { Component } from 'react'

export default class Caro extends Component {
    render() {
        return (
            <div>

                <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                    <ol class="carousel-indicators">
                      <li data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"></li>
                      <li data-bs-target="#carouselExampleDark" data-bs-slide-to="1"></li>
                      <li data-bs-target="#carouselExampleDark" data-bs-slide-to="2"></li>
                    </ol>

                    <div class="carousel-inner">
                      <div class="carousel-item active" data-bs-interval="10000">
                        <div class="card">
                            <div class="card-content">
                              <p class="title">
                                “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
                              </p>
                              <p class="subtitle">
                                Jeff Atwood - BBC NEWS
                              </p>
                            </div>
                        </div>
                      </div>

                      <div class="carousel-item" data-bs-interval="2000">
                        <div class="card">
                            <div class="card-content">
                              <p class="title">
                                “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
                              </p>
                              <p class="subtitle">
                                Jeff Atwood
                              </p>
                            </div>
                        </div>
                      </div>

                      <div class="carousel-item">
                        <div class="card">
                            <div class="card-content">
                              <p class="title">
                                “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
                              </p>
                              <p class="subtitle">
                                Jeff Atwood
                              </p>
                            </div>
                        </div>
                      </div>

                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleDark" role="button" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleDark" role="button" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </a>
                </div>

                
            </div>
        )
    }
}
