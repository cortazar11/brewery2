import React from 'react';
import Payments from './Payments';
import {connect} from 'react-redux';
import * as actions from '../actions';

import DetailsForm from './DetailsForm';

class Dashboard extends React.Component{

  

  renderCredits(){
    if(this.props.auth){
      return <div>Credits: {this.props.auth.credits}</div>
    }
  }

  render(){
    console.log('this.props in Dashboard',this.props.auth)

    return (
      <div className="main-content-dashboard">
          <div className="sidebarDashboard">{this.renderCredits()}</div>
          <div className="mainDashboard">
            <Payments />
            <DetailsForm />
          </div>
         
      </div>
    )
  }
  
}

const mapStateToProps=({auth})=>{
  return {
    auth
  }
}

export default connect(mapStateToProps,actions)(Dashboard);
