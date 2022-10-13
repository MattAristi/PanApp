import { FlatList, Text, View } from 'react-native';

import { OrderDetail } from '../../components';
import react from 'react';
import { styles } from "./styles";

const formDate= (time) => {
    const date = new Date(time)
    return date.toLocaleDateString()
}

const ProductsOrdered = ({ navigation, route}) => {
    const {items}=route.params
    const {orderDate}=route.params
    
    

    
    const renderItem= ({item})=> <OrderDetail item={item} ></OrderDetail>
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.orderDate}>Order date:</Text>
                <Text style={styles.orderDate}>{formDate(orderDate)}</Text>
            </View>
            
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

export default ProductsOrdered