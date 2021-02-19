import React, { Component } from 'react'
import Newsbox from '../Newsbox'
export default class Tech extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            articles: []
        }
    }
    async goTechArticles(){
        const data = await fetch("https://newsapi.org/v2/top-headlines?country=gb&category=technology&apiKey=ba6499bad4eb4af7a54f42954e1807fd");
        const Fdata = await data.json();
        this.setState({
            articles: Fdata.articles
        })
    }
    componentDidMount(){
        //this.getTechArticles
    }
    render() {
        return (
            <div className="Tech-page">
                <h1 className="tech-title-text">Tech</h1>
                <Newsbox articles={this.state.articles} />
                
            </div>
        )
    }
}
