import { createStore} from 'redux'
import reducers from './reducers/index'
import { combineReducers } from "redux";
import { cartReducer } from "../CartRedux/cartReducer";
// const rootReducers = combineReducers({
//    cart: cartReducer,
//     reducers:reducers,
//  });

 const store = createStore(
   // rootReducers,
   reducers,
    {}, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    export default store