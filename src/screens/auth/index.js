import { Button, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { UPDATED_FORM, onFocusOut, onInputChange } from '../../utils/forms';
import react, { useReducer, useState } from 'react';
import {signIn, signUp} from '../../store/actions';

import {Input} from '../../components/index';
import {colors} from '../../constants/thems/colors';
import {styles} from './styles';
import { useDispatch } from 'react-redux';

const initialState= {
    email: {value:'', error:'', touched: false, hasError: true},
    password: {value:'', error:'', touched: false, hasError: true},
    isFormValid: false,
}

const formReducer = (state, action) => {
    switch (action.type) {
        case UPDATED_FORM:
            const {name, hasError, error, touched, value, isFormValid} = action.data;
            return {
                ...state,
                [name]:{
                    ...state[name],
                    value,
                    hasError,
                    touched,
                    error,
                },
                isFormValid
            }
        default: 
        return state;
    }
}

const Auth = ({navigation})=>{
    const dispatch= useDispatch();
    const [isLogin,setIsLogin]=useState(true);
    const [formState, dispatchFormState]= useReducer( formReducer , initialState)
    const title = isLogin? 'Login':'Registro';
    const message = isLogin? '¿No tienes una cuenta? cliquea aqui':'Si ya tienes cuenta clickea aqui';
    const messageAction = isLogin? 'ingresar': 'Registrate';

    const onHandleSubmit= () =>{
        const {password, email} = formState;
        dispatch(isLogin? signIn(email.value, password.value): signUp(email.value, password.value))
        
    }

    const onHandleChange = (value, type) => {
        console.log(value);
        console.log(type);
        onInputChange(type, value, dispatchFormState, formState)
    }
    const onHandleBlur = (value, type) => {
        console.log(value);
        console.log(type);
        onFocusOut(type, value, dispatchFormState, formState)
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
                    onEditingEnd={(e) => onHandleBlur(e.nativeEvent.text, 'email')}
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
                    onEditingEnd={(e) => onHandleBlur(e.nativeEvent.text, 'password')}  
                    hasError={formState.password.hasError}
                    error= {formState.password.error}
                    touched= {formState.password.touched}
                />
                <Button
                title={messageAction}
                color={colors.primary}
                onPress= {onHandleSubmit}
                disabled={!formState.isFormValid}
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