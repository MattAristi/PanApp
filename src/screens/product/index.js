import { Text, View } from "react-native"

import { products } from "../../constants/data";
import {styles} from './styles';

const Product = ({navigation, route}) => {
    const {productId}= route.params
    const product= products.find(product => product.id === productId)
    return (
        <View style={styles.container}>
            <Text>Id: {product.id}</Text>
            <Text>{product.title}</Text>
            <Text>{product.description}</Text>
            <Text>${product.price}</Text>
            <Text>weight: {product.weight}</Text>
        </View>
    )
}
export default Product