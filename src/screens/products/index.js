import { Button, Text, View } from "react-native"

import {styles} from './styles';

const Products = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Text>Products</Text>
            <Button title='Go to Product' onPress={()=>navigation.navigate("Product")}></Button>
        </View>
    )
}

export default Products