import {categoryReducer, orderReducer, productReducer} from './reducers';
import {combineReducers, createStore} from 'redux';

const rootReducer = combineReducers({
    products : productReducer,
    category : categoryReducer,
    order : orderReducer,
})

export default createStore(rootReducer);