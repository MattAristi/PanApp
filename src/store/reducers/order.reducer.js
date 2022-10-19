import { orderTypes } from '../types';
import {orders} from '../../constants/data/orders';

const {ORDERED_PRODUCTS}= orderTypes

const initialState= {
    orders: orders,
    selected: null,

}

const orderReducer = (state = initialState, action)=> {
    switch (action.type) {
        case ORDERED_PRODUCTS:
            const indexOrder= state.categories.findIndex((orders) => orders.id === action.Id);

            if (indexOrder === -1) return state;
            return{
                ...state,
                selected: state.orders[indexOrder]
            }
            default:
                return state;
    }
}

export default orderReducer