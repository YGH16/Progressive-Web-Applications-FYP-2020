import React, { Component } from 'react'

export default class Newsbox extends Component {
    render() {
      return (
        <div className="newsbox">

          {this.props.articles ? this.props.articles.map((article, index) => (
           <div key={index} className="card">
           <img src={article.image} className="card-img-top" alt="Not Available"></img>
           <div key={index} className="card-body">
             <h5 className="card-title">{article.title}</h5>
             <p className="card-text">{article.description}</p>
             <a href={article.url} className="button is-warning Abutton">Original Article</a>
           </div>
         </div> 
          ))
            : "loading...."}

        </div>
      )
    }
}
