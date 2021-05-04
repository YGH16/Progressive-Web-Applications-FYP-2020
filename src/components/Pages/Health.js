import React, { Component } from 'react'
import Newsbox from '../Newsbox'
// const NewsAPI = require('newsapi')

var navStaus = 'online';

export default class Health extends Component {

    constructor(props){
        super(props);
        this.state = {
            articles: []
        }
    }
    getHealthArticles(){
        let url = 'https://gnews.io/api/v4/top-headlines?token=fe4d8face71e9c7f8916bc9f61c87701&lang=en&country=gb&topic=health';
        fetch(url).then((response) => {
          response.json().then((result) => {
            console.log("result")
            localStorage.setItem("health", JSON.stringify(result));
            this.setState({
              articles: result.articles
            })
          })
        }).catch(err => {
          navStaus = 'offline';
          console.log("Health News Section") //For Testing remove later
          let collection = localStorage.getItem("health");
          let Pdata = JSON.parse(collection);
          console.log("health Articles: " + Pdata) //For Testing remove later
          this.setState({
            articles : Pdata.articles
          })
        })
    }
    componentDidMount(){
        this.getHealthArticles();
    }

    render() {
        return (
            <div className="Health-page">

                {navStaus === "offline" ? (
                    <div className="notification is-danger">
                      You are in Offline Mode, It seems your connection is not
                      available.
                    </div>
                ) : null}

                <h1 className="health-title-text">Health</h1>
                <Newsbox articles={this.state.articles} />
                
            </div>
        )
    }
}
