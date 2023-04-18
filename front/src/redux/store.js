import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import loginReducer from './Reducer/loginReducer';
import profileReducer  from './Reducer/profileReducer';
const rootReducer = combineReducers({
   loginReducer,
    profileReducer
 })
 const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
    );
 
 export default store; 