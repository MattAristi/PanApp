import { Button, Text, View } from "react-native"

import {colors} from '../../../src/constants/thems/colors';
import {styles} from './styles';

const Products = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Text>Products</Text>
            <Button title='Go to Product' onPress={()=>navigation.navigate("Product")} color= {colors.primary}></Button>
        </View>
    )
}

export default Products