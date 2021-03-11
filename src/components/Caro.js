import React, { Component } from 'react'

export default class Caro extends Component {
    constructor(props){
      super(props);
      this.state = {
        Article: undefined
      }
    }

    async getCaroItems(){
      const data = await fetch("https://gnews.io/api/v4/top-headlines?token=fe4d8face71e9c7f8916bc9f61c87701");
      const Fdata = await data.json();

      this.setState({Article: Fdata})

      console.log(Fdata)

      this.setState({
        Article: Fdata
      })
    }
    componentDidMount(){
      this.getCaroItems();

    }
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
            <li data-bs-target="#carouselExampleDark" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselExampleDark" data-bs-slide-to="2"></li>
          </ol>

          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <div className="card">
                <div className="card-content">
                  <p className="title">
                    {this.state.Article ? this.state.Article[0].title
                    :"loading"}
                  </p>
                  <p className="subtitle">{this.state.Article ? this.state.Article[0].description
                  :"loading"}</p>
                </div>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="2000">
              <div className="card">
                <div className="card-content">
                  <p className="title">
                  {this.state.Article ? this.state.Article[0].title
                    :"loading"}
                  </p>
                  <p className="subtitle">{this.state.Article ? this.state.Article[0].userId
                  :"loading"}</p>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="card">
                <div className="card-content">
                  <p className="title">
                  {this.state.Article ? this.state.Article[0].title
                    :"loading"}
                  </p>
                  <p className="subtitle">{this.state.Article ? this.state.Article[0].userId
                  :"loading"}</p>
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
