import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './style/custom.scss'

//Header and Footer
import Navigation from './components/Navigation.js';
import Footer from './components/Footer.js';

//Pages
import Home from './components/Home.js';
import Members from './components/Members.js';
import AddMember from './components/AddMember.js';
function App() {

  return (
    <Router>
      <div className="App">
        <Navigation/>
        <Switch>
          <Redirect from='/members' exact={true} to='/members/all'/>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={Navigation}/>
          <Route path="/members" exact component={Members}/>
          <Route path="/members/:activetab" component={Members}/>
          <Route path="/addmembers" component={AddMember}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
