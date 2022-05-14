import {combineReducers} from 'redux'
import { productReducer, selectedProductReducer} from './productsReducer'
import { cartReducer } from "../../CartRedux/cartReducer";

 const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    cartReducer:cartReducer,

})
export default reducers