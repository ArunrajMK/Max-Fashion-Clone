import { legacy_createStore as createStore,combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import { authReducer } from "./Auth/reducer";

import { dataReducer} from "./Data/reducer";



const rootReducer = combineReducers({
  // count:counterReducer,
  data:dataReducer,
  auth:authReducer
})


function logger({ getState }) {
  return next => action => {
    // console.log('will dispatch', action)

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action)

    // console.log('state after dispatch', getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}

function logger2({ getState }) {
  return next => action => {
    // console.log('will dispatch', action)

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action)

    // console.log('state after dispatch', getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}



const myCustomThunk = ({dispatch,getState})=>(next)=>(action)=>{
if(typeof action === "function"){
  return action(dispatch, getState)
}
return next(action)
}





export const store = createStore(rootReducer,
  applyMiddleware(myCustomThunk,logger,logger2),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )


