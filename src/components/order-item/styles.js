import { StyleSheet } from "react-native";
import { colors } from "../../constants/thems";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        display:'flex',
        flexDirection:"row",
        justifyContent: "space-around",
        borderColor: colors.primary ,
        borderWidth:2,

        width:'90%',
        padding:10,
        marginHorizontal:20,
        borderRadius:10,
        fontFamily: 'Lato-Regular',
        marginVertical:15,
    },
    headerContainer:{
        
        justifyContent:"center",
        alignItems:"center",
    },
    date:{
        fontFamily:'Lato-Bold',
        fontSize:18,
    },
    contentContainer:{

    },
    content:{

    },
    total:{

    },
    icon:{
        justifyContent:"center",
        alignItems:"center",
    },
})