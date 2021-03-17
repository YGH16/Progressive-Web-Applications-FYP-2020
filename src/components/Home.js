import React, { Component } from 'react'
import Caro from './Caro';
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
    // gets the most popular articles
    async getArticles(){
      const data = await fetch('https://newsapi.org/v2/top-headlines?country=gb&apiKey=ba6499bad4eb4af7a54f42954e1807fd')
      const Fdata = await data.json();
      this.setState({
        articles: Fdata.articles
      })
      // console.log(this.state.articles[1]);//test
    }
    async getNews(){
      const data = await fetch('https://gnews.io/api/v4/search?q=example&token=fe4d8face71e9c7f8916bc9f61c87701&lang=en')
      const Fdata = await data.json();

      console.log(Fdata)
    }
    componentDidMount(){
      //this.getArticles();
      // this.getNews();

      // if(!navigator.onLine){
      //   navStaus = 'offline'
      // }
    }

    render() {
      console.log(this.state.articles) 
        return (
          <div className="Home">
            {/* Reactivate the caro if it starts working */}
            {/* <Caro /> */}
            {/* {
              navStaus === 'offline'?
              <div>You are Offline, Check your internet. During offline mode functionality is limited only Most Popular will display articles</div>
              :null
            } */}
            <section className="hero">
              <div className="hero-body">
                <p className="title Ht1">
                  Welcome To <strong>NEWSHUB</strong>
                </p>
                <p className="subtitle Hs1">
                  Did You Know You Can Add Us To Your Home Screen For A More Native Experience
                </p>
              </div>
            </section>
            <h1 className="home-title-text">Most Popular</h1>
            <Newsbox articles={this.state.articles} />
            
          </div>
        );
    }
}
