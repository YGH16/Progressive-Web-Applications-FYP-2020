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
            //localStorage.setItem("business", JSON.stringify(result));
            this.setState({
              articles: result.articles
            })
          })
        }).catch(err => {
          navStaus = 'offline';
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
                      You are in Offline Mode, The Tech Page is not available, The only page accessible in
                      offline mode is the most popular page. Please try again once and interent connection is available.
                    </div>
                ) : null}

                <h1 className="tech-title-text">Tech</h1>
                <Newsbox articles={this.state.articles} />
                
            </div>
        )
    }
}
