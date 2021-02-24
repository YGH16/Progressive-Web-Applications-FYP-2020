import React, { Component } from 'react'
import Newsbox from '../Newsbox'
// const NewsAPI = require('newsapi')

export default class Health extends Component {

    constructor(props){
        super(props);
        this.state = {
            articles: []
        }
    }
    async getHealthArticles(){
        const data = await fetch("https://newsapi.org/v2/top-headlines?country=gb&category=health&apiKey=ba6499bad4eb4af7a54f42954e1807fd");
        const Fdata = await data.json();
        this.setState({
            articles: Fdata.articles
        })

        console.log(this.state.articles[1]);
    }
    componentDidMount(){
        this.getHealthArticles();
    }

    render() {
        return (
            <div className="Health-page">
                <h1 className="health-title-text">Health</h1>
                <Newsbox articles={this.state.articles} />
                
            </div>
        )
    }
}
