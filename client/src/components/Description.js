import React from 'react';
import {connect} from 'react-redux';
import {fetchDetails} from '../actions'

class Description extends React.Component {

    componentDidMount(){
      const query=this.props.location.search.substring(1);
     
    }

    render(){
      const response=this.props.details.filter(detail=>{
        console.log('details in Description',typeof detail.title)
        return detail.title===this.props.location.search.substring(1)
      })
      
      const {title, city, country, description, web, email}=response[0];
      
      
      console.log('description in Description', description)
      return (
        <div className="Description">
          <div className="sideDescription">Sidebar</div>
          <div className="mainDescription">
              <div><h1>{title}</h1></div>
              <div>
              <h4>City:</h4>
                {city}
              </div>
              <div>
                <h4>Country:</h4>
                {country}
              </div>
              <div>
                <h4>Description:</h4>
                {description}
              </div>
              <div>
                <h4>Web:</h4>
                {web}
                </div>
              <div>
                <h4>E-Mail:</h4>
                {email}
              </div>

          </div>
          
        </div>
      )
    }
    
    
  }


const mapStateToProps=({details})=>{
 
  return {
    details
  }
}

export default connect(mapStateToProps,{fetchDetails})(Description)