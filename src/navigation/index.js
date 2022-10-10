import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import TabsNavigator from './tabs';

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <TabsNavigator/>
        </NavigationContainer>
    )

}

export default AppNavigator