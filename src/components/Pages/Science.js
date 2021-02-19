import React, { Component } from 'react'

export default class Science extends Component {
    constructor(props){
        super(props);
        this.state = {
            articles: []
        }
    }
    async getScienceArticles(){
        const data = await fetch("https://newsapi.org/v2/top-headlines?country=gb&category=science&apiKey=ba6499bad4eb4af7a54f42954e1807fd");
        const Fdata = await data.json();
        this.setState({
            articles: Fdata.articles
        })
    }
    componentDidMount(){
        //this.getScienceArticles();
    }
    render() {
        return (
            <div className="Science-page">
                <h1 className="science-title-text">Science</h1>
                
            </div>
        )
    }
}
