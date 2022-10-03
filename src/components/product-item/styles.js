import { StyleSheet } from "react-native";
import { colors } from "../../constants/thems";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.primary,
        justifyContent:"center",
        alignItems: "center",
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