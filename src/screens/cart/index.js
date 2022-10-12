import { FlatList, Text, TouchableOpacity, View } from "react-native";

import  CartItem  from "../../components/cart-item";
import React from "react";
import {cart} from '../../constants/data'
import { styles } from "./styles";

const Cart = ({navigation }) => {
    const total=50
    
    const onDelete= (id) => {
        console.warn(id);
    }
    const renderItem = ({item})=> <CartItem item= {item}  onDelete={onDelete} />
    return (
        <View style={styles.container}>
            <View style={styles.containerList}>
                <FlatList
                    data={cart}
                    renderItem={renderItem}
                    keyExtractor={item=>item.id.toString()}
                    style={styles.container}
                />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity
                style={styles.buttonConfirm}
                onPress={()=> null}
                >
                <Text style={styles.textButtonConfirm}>Confirm</Text>
                <View style={styles.totalContainer}>
                    <Text style={styles.total}>Total:   ${total}</Text>
                </View>
                </TouchableOpacity>
            </View>

        </View>
        )
}
export default Cart 