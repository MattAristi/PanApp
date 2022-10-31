import { Text, TextInput, View } from 'react-native';

import Label from '../label'
import react from 'react';
import {styles} from './styles';

const Input = ({
    editable,
    children,
    value,
    onChangeText,
    onFocus,
    onBlur,
    maxLenght,
    placeHolder,
    placeHolderTextColor,
    keyboardType,
    hasError,
    error,
    touched,
    ...props
}) => {
    return (
    <View style={styles.container}> 
        <Label {...props}>
            <TextInput
                {...props}
                style={styles.input}
                editable={editable}
                value={value}
                onChangeText={onChangeText}
                onFocus= {onFocus}
                onBlur= {onBlur}
                maxLength= {maxLenght}
                placeholder= {placeHolder}
                placeHolderTextColor= {placeHolderTextColor}
                keyboardType={keyboardType}
            />

        </Label>
        {hasError && touched && (
        <View style={styles.message}>
            <Text style={styles.helperText}>{error}</Text>
        </View>
        )}
    </View>
    )
}

export default Input


