import { Orders, ProductsOrdered } from "../screens";

import React from "react";
import { colors } from "../constants/thems";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {isAndroid} from '../utils'

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName='Orders'
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
                name='Orders'
                component={Orders}
            />
            <Stack.Screen
                name='Products ordered'
                component={ProductsOrdered}
                options={({route}) => ({
                    title:route.params.name
                })}
            />

        </Stack.Navigator>
        )
}

export default OrdersNavigator

