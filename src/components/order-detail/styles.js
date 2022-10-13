import { StyleSheet } from "react-native";
import {colors} from '../../constants/thems/colors';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        borderColor: colors.primary ,
        borderWidth:2,

        width:'90%',
        padding:10,
        marginHorizontal:20,
        borderRadius:10,
        fontFamily: 'Lato-Regular',
        marginVertical:15,
        
    },
    header: {
        justifyContent:"center",
        alignItems:"center"

    },
    titulo: {

    },
    content: {
        width:'100%',
        justifyContent:"center",
        alignItems:"center"

    },
    description: {

    },
    priceContainer: {
        width:'100%',
        display:"flex",
        flexDirection:'row',
        justifyContent: "space-around",

    },
    price: {

    },
    quantity: {

    },
})