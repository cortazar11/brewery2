import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';

// import GoogleAuth from './GoogleOauth';

class NavBar extends React.Component {

      renderLogin(){
        switch(this.props.auth){
          case null:
            return 
          case false:
            return <div><Link to="/login">Log In</Link></div>
          default:
            return <div><a href="/api/logout">Log Out</a></div>
        }
      }
      render(){
       
        return (
          <div className="navbar">
            <div><Link to="/">Home</Link></div>
            <div><Link to="/contact">Contact</Link></div>
            {this.renderLogin()}
          </div>
        )
      }
   
}

const mapStateToProps=({auth})=>{
    return {
      auth
    }
}

export default connect(mapStateToProps,actions)(NavBar);