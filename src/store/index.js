import {applyMiddleware, combineReducers, createStore} from 'redux';
import {authReducer, cartReducer, categoryReducer, orderReducer, productReducer} from './reducers';

import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    products : productReducer,
    category : categoryReducer,
    order : orderReducer,
    cart : cartReducer,
    auth: authReducer,
})

export default createStore(rootReducer, applyMiddleware(thunk));