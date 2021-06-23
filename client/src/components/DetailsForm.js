import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {createBrewery} from '../actions/index';


class DetailsForm extends React.Component {


 
  renderError(meta){
    if(meta.touched && meta.error){
        return (
          <div className="error">{meta.error}</div>
        )
    }
  }

  renderInput=(formProps)=>{
    return (
      <div className="item">
          <label>{formProps.label}</label>
          <input {...formProps.input} autoComplete="off"  />
          <div>{this.renderError(formProps.meta)}</div>
      </div>
      
      )
  }

  onSubmit = formValues => {
    console.log('formValues',formValues)
    this.props.createBrewery(formValues);
  };

  render(){
    console.log('this.props',this.props)
    return (
      
    
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <header style={{marginBottom: '1em',textAlign: 'center',color: 'red'}}>
          <h1>APPLICATION FORM</h1>
        </header>
        <Field name="title" component={this.renderInput} label="Enter name brewery"/>
        <Field name="country" component={this.renderInput} label="Enter country brewery"/>
        <Field name="city" component={this.renderInput} label="Enter city brewery"/>
        <Field name="web" component={this.renderInput} label="Enter web brewery"/>
        <Field name="description" component={this.renderInput} label="Enter description"/>
        <Field name="email" component={this.renderInput} label="Enter email"/>
        <div style={{visibility: 'hidden'}}>Aqui</div>
        <button type="submit">Submit</button>
      </form>
      
    )
  }
  
}

const validate=(formValues)=>{
    const errors= {}

    if(!formValues.title){
      errors.title="You must enter the name of your brewery"
    }

    if(!formValues.country){
      errors.title="You must enter the country of your brewery"
    }

    if(!formValues.city){
      errors.title="You must enter the city of your brewery"
    }

    if(!formValues.web){
      errors.title="You must enter the web of your brewery"
    }

    if(!formValues.description){
      errors.description="You must enter description"
    }

    if(!formValues.email){
      errors.email="You must enter one email"
    }

    return errors;
}

const formWrap=reduxForm({
    form: 'breweryCreate',
    validate
})(DetailsForm);

export default connect(null,{createBrewery}) (formWrap)