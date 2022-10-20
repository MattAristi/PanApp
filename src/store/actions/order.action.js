import { orderTypes } from "../types";

const {ORDERED_PRODUCTS}= orderTypes

export const selectedOrder= (id) => ({
    type: ORDERED_PRODUCTS,
    orderId: id,
})

