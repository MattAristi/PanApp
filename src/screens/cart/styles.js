import { StyleSheet } from "react-native";
import {colors} from '../../constants/thems/colors';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
    },
    containerList: {
        flex:1,
        backgroundColor: '#fff',

    },
    footer: {
        borderTopColor: colors.primary,
        borderTopWidh:2,
        paddingVertical:10,
    },
    disabledButtonConfirm: {
        backgroundColor: colors.gray,
        borderRadius:5,
        paddingHorizontal:20,
        paddingVertical:10,
        flexDirection: 'row',
        justifyContent:"space-between"
    },
    buttonConfirm: {
        backgroundColor: colors.primary,
        borderRadius:5,
        paddingHorizontal:20,
        paddingVertical:10,
        flexDirection: 'row',
        justifyContent:"space-between"
    },
    textButtonConfirm: {

    },
    totalContainer: {

    },
    total: {
        fontFamily:'Lato-Bold'
    },     
})