import React, { Component } from 'react'
import Newsbox from './Newsbox';

var navStaus = 'online';
// displays the most popular articles
export default class Home extends Component {
  constructor(props){
    super(props);
    this.state ={
      articles: []
    }
  }
    notify(){
      if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
      } else if(Notification.permission === "granted"){
        var notification = new Notification("Hi there!");
      } else if(Notification.permission !== "denied"){
        Notification.requestPermission().then((permission) => {
          if(permission === "granted"){
            var notification = new Notification("hi There");
          }
        });
      }
    }
    //fe4d8face71e9c7f8916bc9f61c87701
    getArticles(){
      let url = 'https://gnews.io/api/v4/top-headlines?token=fe4d8face71e9c7f8916bc9f61c87701&lang=en&country=gb';
      fetch(url).then((response) => {
        response.json().then((result) => {
          console.log("result")
          localStorage.setItem("articles", JSON.stringify(result));
          this.setState({
            articles: result.articles
          })
        })
      }).catch(err => {
        navStaus = 'offline';
        this.notify();
        let collection = localStorage.getItem("articles");
        let Pdata = JSON.parse(collection)
        console.log(Pdata)
        this.setState({
          articles: Pdata.articles
        })
      })
    }
    componentDidMount(){
      this.getArticles(); //deactivate for testing
    }

    render() {
      console.log(this.state.articles);
      return (
        <div className="Home">
          {/* check if navigator is online, if so displays error */}
          {navStaus === "offline" ? (
            <div className="notification is-danger">
              You are in Offline Mode, It seems your connection in not
              available. In offline mode functionaility is reduced. There is
              only access to the most popular page and Images are not available
            </div>
          ) : null}

          <section className="hero">
            <div className="hero-body">
              <p className="title Ht1">
                Welcome To <strong>NEWSHUB</strong>
              </p>
              <p className="subtitle Hs1">
                Did You Know You Can Add Us To Your Home Screen For A More
                Native Experience
              </p>
            </div>
          </section>
          <h1 className="home-title-text">Most Popular</h1>
          <Newsbox articles={this.state.articles} />
        </div>

      );
    }
}
