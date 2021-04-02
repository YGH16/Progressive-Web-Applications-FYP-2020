import React, { Component } from 'react'
import Newsbox from '../Newsbox'

var navStaus = 'online';
export default class Science extends Component {
    constructor(props){
        super(props);
        this.state = {
            articles: []
        }
    }
    getScienceArticles(){
        let url = 'https://gnews.io/api/v4/top-headlines?token=fe4d8face71e9c7f8916bc9f61c87701&lang=en&country=gb&topic=science';
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
        this.getScienceArticles();
    }
    render() {
        return (
            <div className="Science-page">

                {navStaus === "offline" ? (
                    <div className="notification is-danger">
                      You are in Offline Mode, The Science Page is not available, The only page accessible in
                      offline mode is the most popular page. Please try again once and interent connection is available.
                    </div>
                ) : null}

                <h1 className="science-title-text">Science</h1>
                <Newsbox articles={this.state.articles} />
                
            </div>
        )
    }
}
