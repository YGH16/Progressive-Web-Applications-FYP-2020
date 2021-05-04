import React, { Component } from 'react'
import Newsbox from '../Newsbox';
import { HiSearch } from 'react-icons/hi';

var navStaus = 'online';

export default class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            articles: []
        }
    }
    searchArticle(){
        let q = document.getElementById("searchbox").value;
        console.log(q);
        let url = `https://gnews.io/api/v4/search?q=${q}&token=fe4d8face71e9c7f8916bc9f61c87701&lang=en&country=gb`;
        fetch(url).then((response) => {
            response.json().then((result) => {
                console.log(result); //Remove later on for testing purposes
                this.setState({
                    articles: result.articles
                })
            })
        }) .catch(err =>{
            navStaus = 'offline';
        })
    }
    render() {
        return (
            <div className="Search-Page">

                {navStaus === "offline" ? (
                    <div className="notification is-danger">
                      You are in Offline Mode, It seems your connection is not
                      available.
                    </div>
                ) : null}

                <h1 className="search-title-text">Article Search</h1>
                <div className="Search-area">
                    <input className="input is-rounded input-search" id="searchbox" type="text" placeholder="Enter a Keyword to Search For"></input>
                    <button className="button is-warning search-button" onClick={this.searchArticle.bind(this)}><HiSearch /></button>
                </div>

                {this.state.articles ? (
                    <Newsbox articles={this.state.articles} />
                ) : null} 

            </div>
        )
    }
}
