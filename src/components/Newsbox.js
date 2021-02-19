import React, { Component } from 'react'

export default class Newsbox extends Component {
    render() {
      return (
        <div className="newsbox">

          {this.props.articles.map((article, index) => (
            <article class="message">
              <div class="message-header">
                <h1>{article.title}</h1>
              </div>
              <div class="message-body">
                {article.description}
              </div>
              <figure className="image is-16by9">
                <img src={article.urlToImage} width="640" height="360"></img>
              </figure>
              <a href={article.url} className="link-site"><button>Original Article</button></a>
            </article>
          ))}

        </div>
      )
    }
}
