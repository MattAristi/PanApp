import {categoryReducer, productReducer} from './reducers';
import {combineReducers, createStore} from 'redux';

const rootReducer = combineReducers({
    products:productReducer,
    category:categoryReducer,
})

export default createStore(rootReducer);