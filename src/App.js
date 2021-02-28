import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

//Newsapp Components
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
import Weather from './components/Pages/Weather';



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
          <Route path="/Weather" exact component={Weather}></Route>
        </Router>

      </div>
    )
  }
}

export default App;
