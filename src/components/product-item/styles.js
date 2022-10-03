import { StyleSheet } from "react-native";
import { colors } from "../../constants/thems";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.primary,
        
        padding:10,
        marginHorizontal:20,
        borderRadius:10,
        fontFamily: 'Lato-Regular',
        marginVertical:15,
    },
    item:{
        flex:1,
        justifyContent:"space-around",

    },
    title:{
        textAlign:"center",
        fontFamily:'Lato-Bold',
        fontSize:18,
    },
    detailsContainer:{
        flexDirection:"row",
        justifyContent: "space-between",
    },
    price: {
        fontFamily: 'Lato-Bold',
        fontSize: 16,

    },
    detail:{
        fontSize:14,
    },
})