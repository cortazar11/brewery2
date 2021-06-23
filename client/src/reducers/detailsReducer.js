import {FETCH_DETAILS} from '../actions/types';

export default function(state=[],action){
    switch(action.type){
        case FETCH_DETAILS:
          return action.payload
        default:
          return state
    }
}