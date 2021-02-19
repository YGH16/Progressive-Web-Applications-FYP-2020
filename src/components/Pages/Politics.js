import React, { Component } from 'react'
import Newsbox from '../Newsbox'

export default class Politics extends Component {
    constructor(props){
        super(props);
        this.state = {
            articles: []
        }
    }
    async getPoliticsArticles(){
        const data =  await fetch("https://newsapi.org/v2/top-headlines?country=gb&category=health&apiKey=ba6499bad4eb4af7a54f42954e1807fd");
        const Fdata = await data.json();
        this.setState({
            articles: Fdata.articles
        })
    }
    componentDidMount(){
        //this.getPoliticsArticles
    }
    render() {
        return (
            <div className="politics-page">
                <h1 className="politics-title-text">Politics</h1>
                <Newsbox articles={this.state.articles} />
            </div>
        )
    }
}
