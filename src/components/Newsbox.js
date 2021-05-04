import React, { Component } from 'react'
import { FiShare } from 'react-icons/fi';

export default class Newsbox extends Component {
  handleClick(e, article, link){
    console.log(e)
    console.log(article)
    console.log(link)

    this.shareArticle(article, link)

  }
  async shareArticle(title, url){
    const shareData = {
      title: title,
      url: url,
    }
    try{
      await navigator.share(shareData)
      console.log("Share Successful")
    } catch(err){
      console.log("Share Didn't work " + err)
    }
  }
    render() {
      return (
        <div className="newsbox">

          <div className="align-items-center">
          {this.props.articles ? this.props.articles.map((article, index) => (
           <div key={index} className="card mx-auto">
           <img src={article.image} className="card-img-top" alt="Not Available"></img>
           <div key={index} className="card-body">
             <h5 className="card-title">{article.title}</h5>
             <p className="card-text">{article.description}</p>
             <a href={article.url} className="button is-warning Abutton">Original Article</a>
             <button className="button is-success shareButton" onClick={e => this.handleClick(e.target.value, article.title, article.url)} value={index}><FiShare /></button>
           </div>
         </div> 
          ))
            : "loading...."}
          </div>

        </div>
      )
    }
}
