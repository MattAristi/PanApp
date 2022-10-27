import { orderTypes } from '../types';

const {ORDERED_PRODUCTS, GET_ORDER, DELETE_ORDER}= orderTypes

const initialState= {
    selected: null,
    list:[],

}

const orderReducer = (state = initialState, action)=> {
    switch (action.type) {
        case GET_ORDER:
            return {
                ...state,
                list: action.orders
            }

        case ORDERED_PRODUCTS:
            const indexOrder= state.list.findIndex((orders) => orders.id === action.orderId);

            if (indexOrder === -1) return state;
            return{
                ...state,
                selected: state.list[indexOrder]
            }
        case DELETE_ORDER:
            return{
                ...state,
                list: state.list.filter(order => order.id !== action.id)
            }
        default:
            return state;
    }
}

export default orderReducer