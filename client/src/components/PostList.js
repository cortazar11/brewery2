import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts, fetchDetails} from '../actions';
import DetailsList from './DetailsList';
import {Link} from 'react-router-dom';


class PostList extends React.Component {

  
  componentDidMount(){
    this.props.fetchPosts()
    this.props.fetchDetails()
  }

    renderList1(){
     
      return this.props.posts.map(brewerie=>{
         return (
           <div>
              <div key={brewerie.id}>
                <h2>{brewerie.name}</h2>
                <p>{brewerie.country}</p>
                <p>{brewerie.city}</p>
                <p><a href={brewerie.website_url} target="_blank" rel="noreferrer">{brewerie.website_url}</a></p>
              </div>
           </div>
         )
      })
    }

    renderList2(){
      return this.props.details.map(detail=>{
        console.log('detail in postlist', detail)
        return (
          <Link to={{
            pathname: "/description",
            search:`${detail.title}`
          }} >
          <div>
            <h2>{detail.title}</h2>
            <p>{detail.country}</p>
            <p>{detail.city}</p>
            <div></div>
            
          </div>
          </Link>
        )
      })
  }

    render(){
      
      return <div className="mainHome">{this.renderList1()}{this.renderList2()}</div>
    
    }
}

const mapStateToProps=({posts,details})=>{
  return {
    posts, details
  }
}

export default connect(mapStateToProps,
  { fetchPosts, fetchDetails}
)(PostList)