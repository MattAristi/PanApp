import { FlatList, Text, View } from "react-native";

import  CartItem  from "../../components/cart-item";
import React from "react";
import {cart} from '../../constants/data'
import { styles } from "./styles";

const Cart = ({navigation }) => {
    const onDelete= (id) => {
        console.warn(id);
    }
    const renderItem = ({item})=> <CartItem item= {item} onDelete={onDelete}/>
    return (
        <View style={styles.container}>
            <FlatList
                data={cart}
                renderItem={renderItem}

            />
        </View>
        )
}
export default Cart 