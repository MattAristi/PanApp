import { Cart } from "../screens";
import React from "react";
import { colors } from "../constants/thems";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {isAndroid} from '../utils'

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName='Cart'
            screenOptions={{
                headerStyle: {
                backgroundColor: colors.primary,
                },
                headerTintColor: colors.text,
                headerTitleStyle: {
                    fontFamily: 'Lato-Bold',
                    textAlign: 'center',
                }
            }}
            >
            <Stack.Screen
                name='Cart'
                component={Cart}
            />
        </Stack.Navigator>
        )
}

export default CartNavigator