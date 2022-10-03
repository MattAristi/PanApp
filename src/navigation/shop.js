import {Categories, Product, Products} from '../screens'

import React from 'react';
import {colors} from '../../src/constants/thems/colors';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator()

const ShopNavigator = ()=> {
    return (
        <Stack.Navigator
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
        initialRouteName='Categories'>
            <Stack.Screen 
            name='Categories' 
            component={Categories}
            />
            <Stack.Screen 
            name='Products'
            component={Products}
            options={({route}) => ({
                title:route.params.name
            })}
            />
            <Stack.Screen 
            name='Product' 
            component={Product}
            />
        </Stack.Navigator>
    )
}

export default ShopNavigator