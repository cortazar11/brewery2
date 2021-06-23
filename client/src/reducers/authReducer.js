import {FETCH_USER} from '../actions/types';

// const INITIAL_STATE={
//   isSignedIn: null,
//   userId: null
// }

export default (state=null,action)=>{
    switch(action.type){
      case FETCH_USER:
        return action.payload || false
      // case 'SIGN_IN':
      //   return {...state, isSignedIn: true, userId: action.payload}
      // case 'SIGN_OUT':
      //   return {...state, isSignedIn: false, userId: null}
      default:
        return state
    }
}