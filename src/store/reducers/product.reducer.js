import {products} from '../../constants/data/products';
import { productsTypes } from '../types';

const {FILTERED_PRODUCTS, SELECTED_PRODUCTS} = productsTypes
const initialState= {
    products: products,
    selected: null,
    filteredProducts: [],
}

const productReducer= (state= initialState, action) => {
    switch (action.type) {
        case SELECTED_PRODUCTS:
            return {
                ...state,
                selected: state.products.find(
                    (product) => product.id === action.productId
                )
            }
        case FILTERED_PRODUCTS:
            return{
                ...state,
                filteredProducts: state.products.filter(
                    (product) => product.categoryId === action.categoryId
                )
            }
        default: 
        return state;
    }
}

export default productReducer;