import { StyleSheet } from "react-native";
import {colors} from '../../constants/thems/colors';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        justifyContent:"center",
        alignItems: "center",
        borderColor: colors.primary,
        borderRadius: 10,
        margin:7,
        shadowColor: colors.black
    },
    headerContainer:{
        marginVertical:10,
        justifyContent:"center",
        alignItems: "center",
        fontSize:16,
        fontFamily: 'Lato-Bold'
        
    },
    title:{
       
    },
    contentContainer:{
        display:'flex',
        flexDirection:'row',
        width: '80%',
        justifyContent:"space-between",
        alignItems: "center",
        marginBottom:15,


    },
    content:{
        display: 'flex',
        flexDirection: "column"
    },
    priceEach:{
        display:'flex',
        flexDirection:'row',
    },
    quantity:{

    },
    price:{

    }
})