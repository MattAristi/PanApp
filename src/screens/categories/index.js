import { Button, Text, View } from "react-native"

import Card from "../../../components/card";
import {colors} from '../../../constants/colors';
import {styles} from './styles';

const Categories = ({navigation}) => {

    return (
        <View style={styles.container}>
        <Card style={styles.cardContainer}>
            <Text style={styles.title}>Categories</Text>
            <View style={styles.buttonContainer}>
            <Button title='Go to Products 1' onPress={()=>navigation.navigate("Products")} color={colors.primary}></Button>
            <Button title='Go to Products 2' onPress={()=>navigation.navigate("Products")} color={colors.primary}></Button>
            <Button title='Go to Products 3' onPress={()=>navigation.navigate("Products")} color={colors.primary}></Button>
            </View>
        </Card>
        </View>
    )
}

export default Categories