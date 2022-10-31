import { Button, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { UPDATED_FORM, onInputChange } from '../../utils/forms';
import react, { useReducer, useState } from 'react';

import {Input} from '../../components/index';
import {colors} from '../../constants/thems/colors';
import {signUp} from '../../store/actions';
import {styles} from './styles';
import { useDispatch } from 'react-redux';

const initialState= {
    email: {value:'', error:'', touched: false, hasError: true},
    password: {value:'', error:'', touched: false, hasError: true},
    isFromValid: false,
}

const formReducer = (state, action) => {
    switch (action.type) {
        case UPDATED_FORM:
            const {name, hasError,error, touched, value, isFromValid} = action.data;
            return {
                ...state,
                [name]:{
                    ...state[name],
                    value,
                    hasError,
                    touched,
                    error,
                },
                isFromValid
            }
        default: 
        return state;
    }
}

const Auth = ({navigation})=>{
    const dispatch= useDispatch();
    const [isLogin,setIsLogin]=useState(true);
    const [formState, dispatchFormState]= useReducer(formReducer,initialState)
    const title = isLogin? 'Login':'Registro';
    const message = isLogin? '¿No tienes una cuenta? cliquea aqui':'Si ya tienes cuenta clickea aqui';
    const messageAction = isLogin? 'ingresar': 'Registrate';

    const onHandleSubmit= () =>{
        dispatch(signUp(formState.email.value, formState.password.value))
        
    }

    const onHandleChange = (value, type) => {
        onInputChange(type, value, dispatchFormState, formState)
    }

    return(
        <KeyboardAvoidingView style= {styles.containerKeyboard} behavior='padding'>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Input
                    style={styles.input}
                    placeholder='Ingrese su Email'
                    label='Email'
                    value={formState.email.value}
                    placeholderTextColor={colors.gray}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect= {false}
                    onChangeText= {(text)=> onHandleChange(text, 'email')} 
                    hasError={formState.email.hasError}
                    error= {formState.email.error}
                    touched= {formState.email.touched}
                />
                <Input
                    style={styles.input}
                    label= 'Password'
                    placeholderTextColor={colors.gray}
                    value={formState.password.value}
                    placeholder='Ingrese su contraseña'                
                    secureTextEntry={true}
                    autoCapitalize='none'
                    autoCorrect= {false}
                    onChangeText= {(text)=> onHandleChange(text, 'password')} 
                    hasError={formState.password.hasError}
                    error= {formState.password.error}
                    touched= {formState.password.touched}
                />
                <Button
                title={messageAction}
                color={colors.primary}
                onPress= {onHandleSubmit}
                disabled={!formState.isFromValid}
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