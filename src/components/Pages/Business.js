import React, { Component } from 'react'
import Newsbox from '../Newsbox';

export default class Business extends Component {
    constructor(props){
        super(props);
        this.state = {
            articles: []
        }
    }

    async getBusinessArticles(){
        const data = await fetch('https://newsapi.org/v2/top-headlines?country=gb&category=business&apiKey=ba6499bad4eb4af7a54f42954e1807fd');
        const Fdata = await data.json();
        this.setState({
            articles: Fdata.articles
        })

        console.log(this.state.articles);
    }

    componentDidMount(){
        //this.getBusinessArticles();
    }

    render() {
        return (
            <div className="Business-page">
                <h1 className="business-title-text">Business</h1>
                <Newsbox articles={this.state.articles} />
            </div>
        )
    }
}
