import { Text, View } from "react-native"

import {styles} from './styles';
import { useSelector } from "react-redux";

const Product = ({navigation}) => {
    const product = useSelector((state) => state.products.selected)
    
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