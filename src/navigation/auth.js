import Auth from '../screens/auth/index';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import react from 'react';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return(
        <Stack.Navigator
            initialRouteName='Auth'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name='Auth'
                component={Auth}
            />
        </Stack.Navigator>    
    )
}

export default AuthNavigator