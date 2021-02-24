import React, { Component } from 'react'

export default class Stickynav extends Component {
    render() {
        return (
          <div className="weather-bottom">
            <nav className="fixed-bottom stickynav">
              <div className="tile is-ancestor">
                <div className="tile is-vertical is-12">
                  <div className="tile">
                    <div className="tile is-parent">
                      <article className="tile is-child notification weather-tile">
                        <p className="title">SUNNY</p>
                        <p className="subtitle">16</p>
                        <div className="content"></div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        );
    }
}
