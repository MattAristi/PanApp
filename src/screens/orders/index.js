import { FlatList, Text, View } from "react-native";

import OrderItem from "../../components/order-item";
import React from "react";
import {orders} from '../../constants/data';
import { styles } from "./styles";

const Orders = ({navigation }) => {
    const onCancel = (id)=> {
        console.warn(id);
    }
    const onSelected = (item) => {
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