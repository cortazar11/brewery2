import React from 'react';
import {connect} from 'react-redux';
import {fetchDetails}from '../actions';

class DetailsList extends React.Component {

  componentDidMount(){
    this.props.fetchDetails()
  }

  renderDetails(){
      return this.props.details.map(detail=>{
        return (
          <div>
            <h2>{detail.title}</h2>
            <p>{detail.country}</p>
          </div>
        )
      })
  }

  render(){
    console.log('this.props',this.props.details)
    return (
      <div>
          {this.renderDetails()}
      </div>
    )
  }
}

const mapStateToProps=({details})=>{
  
    return {
      details
    }
}

export default connect(mapStateToProps,{fetchDetails})(DetailsList)