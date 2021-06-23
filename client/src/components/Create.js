import React from 'react';
import {connect} from 'react-redux';
import { createBrewery } from '../actions';

import DetailsForm from './DetailsForm';

class Create extends React.Component {

    onSubmit=(formValues)=>{
      console.log('form values in DetailsForm', formValues)
          this.props.createInstance(formValues)
    }


    render(){
      return (
        <div>
          <h1>Create a Brewery Instance</h1>
          <DetailsForm onSubmit={this.onSubmit}/>
        </div>
      )
    }
}

export default connect(null,actions) (Create);