import { URL_API } from "../../constants/firebase";
import { orderTypes } from "../types";

const {ORDERED_PRODUCTS, DELETE_ORDER, GET_ORDER}= orderTypes

export const selectedOrder= (id) => ({
    type: ORDERED_PRODUCTS,
    orderId: id,
})

export const getOrders = () => {
    return async(dispatch) => {
        try{
            const response = await fetch(`${URL_API}/orders.json`,{
                method: 'GET',
                headres: {
                    'content-type': 'application/json'
                }
            })
            const data= await response.json()
            
            const orders = Object.keys(data).map(key => {
                return {
                    ...data[key],
                    id: key,
                }
                })

                dispatch ({
                    type: GET_ORDER,
                    orders
                })
        }
        catch(error) {
            console.log(error);
        }
    }
}
export const deleteOrder = (id) => {
    return async(dispatch) => {
        try {
            const response = await fetch(`${URL_API}/orders/${id}.json`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();

            dispatch({
                type:DELETE_ORDER,
                id
            })

        }
        catch (error){
            console.log();
        }
    }
}