import React, { Component } from 'react'
import Newsbox from '../Newsbox';

var navStaus = 'online'; //checks offline
export default class Business extends Component {
    constructor(props){
        super(props);
        this.state = {
            articles: []
        }
    }

    getBusinessArticles(){
        let url = 'https://gnews.io/api/v4/top-headlines?token=fe4d8face71e9c7f8916bc9f61c87701&lang=en&country=gb&topic=business';
        fetch(url).then((response) => {
          response.json().then((result) => {
            console.log("result")
            localStorage.setItem("business", JSON.stringify(result));
            this.setState({
              articles: result.articles
            })
          })
        }).catch(err => {
          navStaus = 'offline';
          console.log("Business News Section")
          let collection = localStorage.getItem("business");
          let Pdata = JSON.parse(collection);
          console.log("Business Articles: " + Pdata) //For Testing remove later
          this.setState({
            articles : Pdata.articles
          })
        })
      }

    componentDidMount(){
        this.getBusinessArticles();
    }

    render() {
        return (
            <div className="Business-page">

                {navStaus === "offline" ? (
                    <div className="notification is-danger">
                      You are in Offline Mode, It seems your connection is not
                      available.
                    </div>
                ) : null}

                <h1 className="business-title-text">Business</h1>
                <Newsbox articles={this.state.articles} />
            </div>
        )
    }
}
