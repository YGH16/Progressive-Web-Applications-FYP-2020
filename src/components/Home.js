import React, { Component } from 'react'
import Caro from './Caro';
import Newsbox from './Newsbox';

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
      //this.getNews();
    }

    render() {
      console.log(this.state.articles) 
        return (
          <div className="Home">

            <Caro />
            <h1 className="home-title-text">Most Popular</h1>
            <Newsbox articles={this.state.articles} />
            
          </div>
        );
    }
}
