import { Button, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import react, { useState } from 'react';

import {colors} from '../../constants/thems/colors';
import {styles} from '../../screens/auth/styles';

const Auth = ({navigation})=>{
    const [isLogin,setIsLogin]=useState(true);
    const title = isLogin? 'Login':'Registro';
    const message = isLogin? '¿Notienes una cuenta?':'¿Tienes cuenta?';
    const messageAction = isLogin? 'ingresar': 'Registrate';

    return(
        <KeyboardAvoidingView style= {styles.containerKeyboard} behavior='padding'>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Ingrese su Email'
                    placeholderTextColor={colors.gray}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect= {false}
                    onChangeText= {(text)=> console.warn(text)} 
                />
                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholderTextColor={colors.gray}
                    placeholder='Ingrese su contraseña'                
                    secureTextEntry={true}
                    autoCapitalize='none'
                    autoCorrect= {false}
                    onChangeText= {(text)=> console.log('text',text)} 
                />
                <Button
                title={messageAction}
                color={colors.primary}
                onPress= {()=> console.log('press')}
                />
                <View style={styles.prompt}>                    
                    <TouchableOpacity style={styles.promptButton} onPress={()=> setIsLogin(!isLogin)}>
                        <Text style={styles.promptMessage}>{message}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Auth