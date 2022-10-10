import CartNavigator from './cart';
import {Ionicons} from '@expo/vector-icons'
import OrdersNavigator from './orders';
import ShopNavigator from './shop';
import { colors } from '../constants/thems';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import react from 'react';

const BottomTab = createBottomTabNavigator()

const TabsNavigator = () => {
    return (
        <BottomTab.Navigator
        initialRouteName='ShopTab'
        screenOptions={{
            headerShown: false,
        }}
        >
            <BottomTab.Screen
            name='ShopTab'
            component={ShopNavigator}
            options={{
                title:'Shop',
                tabBarIcon: ({ focused }) => (
                    <Ionicons 
                    name={focused?'home':"md-home-outline"} 
                    size={20} 
                    color={colors.primary} />
                ),
                tabBarLabelStyle:{
                    fontFamily: 'Lato-Bold',
                    color:colors.primary,
                }
            }}
            />
            <BottomTab.Screen
            name='OrdersTab'
            component={OrdersNavigator}
            options={{
                title:'Orders',
                tabBarIcon: ({focused}) => (
                    <Ionicons 
                    name={focused ? 'briefcase' : "briefcase-outline"} 
                    size={20} 
                    color={colors.primary} 
                    />
                ),
                tabBarLabelStyle:{
                    fontFamily: 'Lato-Bold',
                    color:colors.primary,
                }
            }}
            />
            <BottomTab.Screen
            name='CartTab'
            component={CartNavigator}
            options={{
                title:'Cart',
                tabBarIcon: ({focused}) => (
                    <Ionicons 
                    name={focused?'cart':"md-cart-outline"} 
                    size={20} 
                    color={colors.primary} 
                    />
                ),
                tabBarLabelStyle:{
                    fontFamily: 'Lato-Bold',
                    color:colors.primary,
                }   
            }}
            />
        </BottomTab.Navigator>
    )
}
export default TabsNavigator