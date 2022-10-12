import { Text, TouchableOpacity, View } from 'react-native';

import {Ionicons} from '@expo/vector-icons'
import {categories} from '../../constants/data/categories';
import { colors } from '../../constants/thems';
import react from 'react';
import { styles } from './styles';

const CartItem = ({item, onDelete}) => {
    const catId= item.categoryId
    const category= categories.find(category => category.id=== catId)

    
    return (
        <View style={styles.container} backgroundColor={category.color} >
            <View style={styles.headerContainer}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.content}>
                    <View style={styles.priceEach} >
                        <Text style={styles.quantity}>{item.quantity} unit{item.quantity>1 ? 's ':' '}</Text>
                        <Text style={styles.price}>/ ${item.price} each</Text>
                    </View>
                    <View>
                        <Text style={styles.price}>Total ${item.price * item.quantity}</Text>
                    </View>
                </View>    
                               
                <TouchableOpacity onPress={() => onDelete(item.id)}>
                    <Ionicons 
                    name="md-trash-outline"
                    size= {24}
                    color= {colors.secundary}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartItem