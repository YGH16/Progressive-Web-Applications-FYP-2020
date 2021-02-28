import React, { Component } from 'react'

export default class Weather extends Component {
    constructor(props){
        super(props);
        this.state = {
            Location: undefined,
            Temp: undefined,
            icon: undefined,
            desc: undefined
        }
    }
    async getWeather(){
        const data = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=167cfff237226380c39e0667f14410e1');
        const Fdata = await data.json();
        console.log(Fdata);

        this.setState({
            Location: Fdata.name,
            Temp: Fdata.main.temp,
            icon: Fdata.weather[0].icon + ".jpg",
            desc: Fdata.weather[0].description
        })

        console.log("Hello: " + this.state.Location + " " + this.state.Temp + " " + this.state.icon + " " + this.state.desc);

    }
    componentDidMount(){
        //this.getWeather();
    }
    render() {
        return (
          <div className="Weather-page">
              <h1 className="weather-title-text">Today's Weather:</h1>
            <article className="message">
              <div className="message-body text-center">
                  <h2>{this.state.Temp}°C</h2>
                  <h3>{this.state.desc}</h3>
                  <img src={this.state.icon} alt="Weather icon"/>
              </div>
            </article>
          </div>
        );
    }
}
