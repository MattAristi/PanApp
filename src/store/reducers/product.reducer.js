import {products} from '../../constants/data';

const initialState= {
    products: products,
    selected: null,
    filtered: [],
}

const productReducer= (state= initialState, actions) => {
    return state;
}

export default productReducer;