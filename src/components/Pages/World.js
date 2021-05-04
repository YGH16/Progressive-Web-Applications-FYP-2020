import React, { Component } from 'react'
import Newsbox from '../Newsbox'

var navStaus = 'online'; //checks offline
export default class World extends Component {
    constructor(props){
        super(props);
        this.state = {
            articles: []
        }
    }
     getWorldArticles(){
        const url = 'https://gnews.io/api/v4/top-headlines?token=fe4d8face71e9c7f8916bc9f61c87701&lang=en&country=gb&topic=world'
        const testurl = "https://newsapi.org/v2/top-headlines?country=gb&category=health&apiKey=ba6499bad4eb4af7a54f42954e1807fd"
        fetch(url).then((response) => {
            response.json().then((result) => {
              console.log("result")
              localStorage.setItem("world", JSON.stringify(result));
              this.setState({
                articles: result.articles
              })
            })
          }).catch(err => {
            navStaus = 'offline';
            console.log("world News Section")
            let collection = localStorage.getItem("world");
            let Pdata = JSON.parse(collection);
            console.log("world Articles: " + Pdata) //For Testing remove later
            this.setState({
              articles : Pdata.articles
            })
          })
    }
    componentDidMount(){
        this.getWorldArticles()
    }
    render() {
        return (
            <div className="politics-page">

                {navStaus === "offline" ? (
                    <div className="notification is-danger">
                      You are in Offline Mode, It seems your connection is not
                      available.
                    </div>
                ) : null}

                <h1 className="politics-title-text">World</h1>
                <Newsbox articles={this.state.articles} />
            </div>
        )
    }
}
