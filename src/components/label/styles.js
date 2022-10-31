import { StyleSheet } from "react-native";
import { colors } from "../../constants/thems";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    label: {
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        marginVertical: 5,
        color: colors.text
    },
});