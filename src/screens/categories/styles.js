import { StyleSheet } from "react-native";
import {colors} from '../../../constants/colors';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.white,
        justifyContent:"center",
        alignItems: "center"
    },
    cardContainer: {
        width: '80%',
        height: 180,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        marginTop: 20,
    },
    title:{
        fontFamily:'Lato-Regular',
        marginVertical:10,
    },
    buttonContainer: {
        justifyContent: "space-around",
    }
})