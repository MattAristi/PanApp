import { Button, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux";

import {addToCart} from '../../store/actions';
import react from 'react';
import {styles} from './styles';

const Product = ({navigation}) => {
    const dispatch= useDispatch()
    const product = useSelector((state) => state.products.selected)

    const{id, title, description, price, weight}= product

    const addCartItem = ()=> {
        dispatch(addToCart(product));
    }
    
    return (
        <View style={styles.container}>
            <Text>Id: {id}</Text>
            <Text>{title}</Text>
            <Text>{description}</Text>
            <Text>${price}</Text>
            <Text>weight: {weight}</Text>
            <Button title= 'add to cart' onPress={addCartItem} />
        </View>
    )
}
export default Product