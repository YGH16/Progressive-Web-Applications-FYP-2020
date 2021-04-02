import React, { Component } from 'react'

var navStaus = 'online';

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

    getLatestWeather(){
        let url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=167cfff237226380c39e0667f14410e1';
        fetch(url).then((response) => {
            response.json().then((result) => {
                console.log(result); //for testing remove later
                
                this.setState({
                    Location: result.name,
                    Temp: result.main.temp,
                    icon: result.weather[0].icon + ".jpg",
                    desc: result.weather[0].description
                })
            })
        }).catch(err => {
            navStaus = 'office';
        })
    }
    componentDidMount(){
      this.getLatestWeather();
    }
    render() {
        return (
          <div className="Weather-page">

            {navStaus === "offline" ? (
              <div className="notification is-danger">
                You are in Offline Mode, The weather Page is not available, The
                only page accessible in offline mode is the most popular page.
                Please try again once and interent connection is available.
              </div>
            ) : null}

            <h1 className="weather-title-text">Today's Weather:</h1>
            <article className="message">
              <div className="message-body text-center">
                <h2>{this.state.Temp}°C</h2>
                <h3>{this.state.desc}</h3>
                <img src={this.state.icon} alt="Weather icon" />
              </div>
            </article>
          </div>
        );
    }
}
