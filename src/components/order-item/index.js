import { Text, TouchableOpacity, View } from "react-native";

import {Ionicons} from '@expo/vector-icons'
import React from "react";
import {colors} from '../../constants/thems/colors';
import { styles } from "./styles";

const formDate= (time) => {
    const date = new Date(time)
    return date.toLocaleDateString()
}

const itemQuantity = '15 units'
const OrderItem = ({onCancel, item, onSelected}) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.date}>{formDate(item.date)}</Text>
            </View>
            <View style={styles.contentContainer}>
                <TouchableOpacity onPress={()=> onSelected(item)}>
                    <View style={styles.content}>
                        <Text style={styles.itemQuantity}>{itemQuantity}</Text>
                        <Text style={styles.total}>${item.total}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.icon}>
            <TouchableOpacity onPress={()=> onCancel(item.id)}>
                <Ionicons name="md-close-sharp" size={24} color={colors.cross}
            />
            </TouchableOpacity>
            </View>
        </View>
    )
}
export default OrderItem