import React, { Component } from 'react'
import Newsbox from '../Newsbox'

var navStaus = 'online';
export default class Tech extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            articles: []
        }
    }
    getTechArticles(){
        let url = 'https://gnews.io/api/v4/top-headlines?token=fe4d8face71e9c7f8916bc9f61c87701&lang=en&country=gb&topic=technology';
        fetch(url).then((response) => {
          response.json().then((result) => {
            console.log("result")
            localStorage.setItem("tech", JSON.stringify(result));
            this.setState({
              articles: result.articles
            })
          })
        }).catch(err => {
          navStaus = 'offline';
          console.log("Tech News Section")
          let collection = localStorage.getItem("tech");
          let Pdata = JSON.parse(collection);
          console.log("tech: " + Pdata) //For Testing remove later
          this.setState({
            articles : Pdata.articles
          })
        })
    }
    componentDidMount(){
        this.getTechArticles();
    }
    render() {
        return (
            <div className="Tech-page">

                {navStaus === "offline" ? (
                    <div className="notification is-danger">
                      You are in Offline Mode, It seems your connection is not
                      available.
                    </div>
                ) : null}

                <h1 className="tech-title-text">Tech</h1>
                <Newsbox articles={this.state.articles} />
                
            </div>
        )
    }
}
