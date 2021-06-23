import jsonPlaceholder from '../apis/jsonPlaceholder';
import axios from 'axios';
import {FETCH_USER,FETCH_DETAILS, BRE_SELECTED} from './types';


export const fetchUser=()=>{

    return async dispatch=>{
      const response=await axios.get(process.env.REACT_APP_AXIOS_URL+'/api/current_user')
      console.log('fetch_user',response.data)


      dispatch({
        type: FETCH_USER,
        payload: response.data
      })
    }
    
}

export const handleToken=(token)=>{

  return async dispatch=>{
   
    const response=await axios.post('/api/stripe',token)
    

    dispatch({
      type: FETCH_USER,
      payload: response.data
    })
  }
  
}

export const createBrewery= formValues=>async dispatch =>{
  console.log('formValues in createBrewery', formValues)
      const response= await axios.post('/api/details',formValues)
      console.log('response in actions',response)

      dispatch ({
        type: FETCH_USER,
        payload: response.data
      })
}

export const fetchPosts= ()=>{

  return async dispatch=>{
  
    const response=await jsonPlaceholder.get("/breweries")
    console.log('response in fetchPosts',response)
  
    dispatch({
          type: 'FETCH_POSTS',
          payload: response.data
        })
    
  }
 
}

export const fetchDetails=()=>async dispatch =>{
  console.log('something here')
    const response= await axios.get('/api/details')
    console.log('details in index',response.data)

    dispatch({
      type: FETCH_DETAILS,
      payload: response.data
    })
}

