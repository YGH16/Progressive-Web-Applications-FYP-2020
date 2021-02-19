import React, { Component } from 'react'

export default class Stickynav extends Component {
    render() {
        return (
            <div className="weather-bottom">

                <nav class="fixed-bottom stickynav">

                    <div class="tile is-ancestor">
                        <div class="tile is-vertical is-12">
                          <div class="tile">
          
                          <div class="tile is-parent">
                            <article class="tile is-child notification weather-tile">
                              <p class="title">SUNNY</p>
                              <p class="subtitle">16</p>
                              <div class="content">
                              
                              </div>
                            </article>
                          </div>
                        </div>
                      </div>
                    </div>  
                    
                </nav>
                
            </div>
        )
    }
}
