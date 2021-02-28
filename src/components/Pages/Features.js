import React, { Component } from 'react'
// features-title-text
export default class Features extends Component {
    render() {
        return (
            <div className="Features-page">

                <h1 className=" display-1 text-center">Features</h1>

                <div className="features-content container">
                
                    <p className="lead">This application make use of the progressive web app technology.
                        Progressive web apps allow web apps to act like native apps, by allowing
                        the app to be installed on a various number of platforms.
                    </p>

                    <p className="lead">
                        Live News
                    </p>

                    <p className="lead">
                        Installability
                    </p>

                    <p className="lead">
                        Offline Availibility
                    </p>

                    <p className="lead">
                        Caching
                    </p>

                </div>


                    

                

            </div>
        )
    }
}
