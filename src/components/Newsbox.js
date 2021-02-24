import React, { Component } from 'react'

export default class Newsbox extends Component {
    render() {
      return (
        <div className="newsbox">

          {this.props.articles ? this.props.articles.map((article, index) => (
            <article key={index} className="message">
              <div className="message-header">
                <h1>{article.title}</h1>
              </div>
              <div className="message-body">
                {article.description}
              </div>
              <figure className="image is-16by9">
                <img src={article.urlToImage} width="640" height="360" alt="Not available"></img>
              </figure>
              <a href={article.url} className="link-site"><button>Original Article</button></a>
            </article>
          ))
            : "loading...."}

        </div>
      )
    }
}
