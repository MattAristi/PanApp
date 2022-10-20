import { FlatList, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import OrderItem from "../../components/order-item";
import React from "react";
import { selectedOrder } from "../../store/actions";
// import {orders} from '../../constants/data';
import { styles } from "./styles";

const Orders = ({navigation }) => {
    dispatch = useDispatch()
    const orders = useSelector((state)=> state.order.orders )
    
    const onCancel = (id)=> {
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