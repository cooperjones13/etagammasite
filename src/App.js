import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './style/custom.scss'

//COMPONENTS
//Header and Footer
import Navigation from './components/Navigation.js';
import Footer from './components/Footer.js';

//Pages
import Home from './components/Home.js';
import Members from './components/Members.js';
import PageNotFound from './components/PageNotFound';
import History from './components/History';
import Rush from './components/Rush';
// import RushFAQ from './components/RushFAQ';


function App() {

  return (
    <Router>
      <div className="App">
        <Navigation/>
        <Switch>
          <Redirect from='/members' exact={true} to='/members/all'/>
          <Redirect from='/rush' exact={true} to='/rush/requirements'/>
          <Route path="/" exact component={Home}/>
          {/* <Route path="/faq" component={PageNotFound}/> */}
          <Route path="/history" component={History}/>
          {/* <Route path="/values" component={PageNotFound}/> */}
          <Route path="/rush" exact component={Rush}/>
          <Route path="/rush/:activetab" component={Rush}/>
          {/* <Route path="/login" component={PageNotFound}/> */}
          {/* <Route path="/family-tree" component={PageNotFound}/> */}
          <Route path="/members" exact component={Members}/>
          <Route path="/members/:activetab" component={Members}/>
          <Route path="/page-not-found" component={PageNotFound}/>

          <Redirect from='/'to='/page-not-found'/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
