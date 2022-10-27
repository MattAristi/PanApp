import { FlatList, View } from "react-native";
import React, { useCallback } from "react";
import { deleteOrder, getOrders, selectedOrder } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";

import OrderItem from "../../components/order-item";
import { styles } from "./styles";
import { useFocusEffect } from "@react-navigation/native";

const Orders = ({navigation }) => {
    dispatch = useDispatch()
    const orders = useSelector((state)=> state.order.list )
    // el useFocusEffect es para que se encuentre en foco dentro de la vista
    useFocusEffect(
        // el useCallback es para renderizar automaticamente cuando haya cambio en el dispatch de getOrders
        useCallback(() => {
        dispatch(getOrders());
        }, [dispatch])
    );
    
    const onCancel = (id)=> {
        dispatch(deleteOrder(id))
    }

    const onSelected = (item) => {
        dispatch(selectedOrder(item.id))
    
        navigation.navigate('Products ordered', { orderDate:item.date, orderId: item.id, items: item.items });
    }
    const renderItem=({item}) => <OrderItem item={item} onCancel={onCancel} onSelected={onSelected} />
    
    return (
        <View style={styles.container}>
            <FlatList
            data={orders}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            />

        </View>
    )
}
export default Orders