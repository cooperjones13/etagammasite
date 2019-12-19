import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './style/custom.scss'

//Header and Footer
import Navigation from './components/Navigation.js';
import Footer from './components/Footer.js';

//Pages
import Home from './components/Home.js';
import Members from './components/Members.js';
import PageNotFound from './components/PageNotFound';
function App() {

  return (
    <Router>
      <div className="App">
        <Navigation/>
        <Switch>
          <Redirect from='/members' exact={true} to='/members/all'/>
          <Route path="/" exact component={Home}/>
          {/* <Route path="/faq" component={PageNotFound}/>
          <Route path="/history" component={PageNotFound}/>
          <Route path="/values" component={PageNotFound}/>
          <Route path="/rush" component={PageNotFound}/>
          <Route path="/login" component={PageNotFound}/>
          <Route path="/family-tree" component={PageNotFound}/> */}
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
