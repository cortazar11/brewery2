import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form';
import postsReducer from '../reducers/postsReducer';
import authReducer from '../reducers/authReducer';
import detailsReducer from '../reducers/detailsReducer';


export default combineReducers({
      posts: postsReducer,
      auth: authReducer,
      form: formReducer,
      details: detailsReducer
      
})