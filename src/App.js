import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';

// Newsapp Web Pages
import About from './components/Pages/Aboutus';
import Business from './components/Pages/Business';
import Features from './components/Pages/Features';
import Politics from './components/Pages/Politics';
import Health from './components/Pages/Health';
import Science from './components/Pages/Science';
import Tech from './components/Pages/Tech';

// floating weather tile
import Stick from './components/Stickynav';


class App extends Component{
  
  render(){
    return(
      <div className="App">
        
        <Router>

          <Navbar />

          <Route path="/" exact component={Home}></Route>
          <Route path="/About" exact component={About}></Route>
          <Route path="/Business" exact component={Business}></Route>
          <Route path="/Features" exact component={Features}></Route>
          <Route path="/Health" exact component={Health}></Route>
          <Route path="/Politics" exact component={Politics}></Route>
          <Route path="/Science" exact component={Science}></Route>
          <Route path="/Tech" exact component={Tech}></Route>

        </Router>

        <Stick />

        {/*  Test the various versions of floating and static */}

        {/* <div className="Weather-Tile">
          <article class="message">
            <div class="message-header">
              <p>Today's Weather</p>
            </div>
            <div class="message-body">
              
            </div>
          </article>
          
        </div> */}

      </div>
    )
  }
}

export default App;
