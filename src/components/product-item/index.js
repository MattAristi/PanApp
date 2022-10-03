import  { Text, TouchableOpacity, View } from "react-native"

import react from 'react';
import {styles} from './styles';

const ProductItem= ({item, onSelected}) => {
    <View style={styles.container}>
        <TouchableOpacity style={styles.item} onPress={()=> onSelected(item)}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.detailsContainer}>
                <Text style={styles.price}>$ {item.price}</Text>
                <Text style={styles.detail}>{item.weight}</Text>
            </View>
        </TouchableOpacity>
    </View>
}
export default ProductItem