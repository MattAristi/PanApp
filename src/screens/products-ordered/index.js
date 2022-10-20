import { FlatList, Text, View } from 'react-native';

import { OrderDetail } from '../../components';
import react from 'react';
import { styles } from "./styles";
import { useSelector } from 'react-redux';

const formDate= (time) => {
    const date = new Date(time)
    return date.toLocaleDateString()
}


const ProductsOrdered = ({ navigation, route}) => {
    const order = useSelector((state)=> state.order.selected)
    const {items} = order
    
    
        
    const renderItem= ({item})=> <OrderDetail item={item} ></OrderDetail>
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.orderDate}>Order date:</Text>
                <Text style={styles.orderDate}>{formDate(order.date)}</Text>
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