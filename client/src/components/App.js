import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './Home';
import Contact from './Contact';
import Header from './Header';
import NavBar from './NavBar'
import Footer from './Footer';
import DetailsForm from './DetailsForm';
import Description from './Description';
import Login from './Login';
import Dashboard from './Dashboard';
import {connect}from 'react-redux';
import * as actions from '../actions';




class App extends React.Component {

  componentDidMount(){
      this.props.fetchUser()
  }

  render(){
    return (
      <div>
        
        <BrowserRouter>
            <div id="container">
              <Header />
              <NavBar />
                <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/new" component={DetailsForm}/>
                <Route path="/login" component={Login}/>
                <Route path="/description" component={Description}/>
                </Switch>
              <Footer />
            </div>
        </BrowserRouter>
      </div>
    )
  }
  
}

export default connect(null, actions) (App);