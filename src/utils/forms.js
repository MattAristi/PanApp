const formatEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const minPasswordLength= 6;


const validateInput= (name, value) => {
    let hasError=false;
    let error = '';
    switch(name) {
        case 'email':
            if (value?.trim()==='') {
                hasError= true;
                error= `El email es requerido`
            } else if(!formatEmail.test(value)){
                hasError= true;
                error='El email no es valido'
            } else {
                hasError= false;
                error= '';
            } 
            break;
        case 'password':
            if (value?.trim()==='') {
                hasError= true;
                error= `El password es requerido`
            }else if(value.length < minPasswordLength){
                hasError= true;
                error=`El password no es valido, debe tener al menos ${minPasswordLength} digitos.`
            } else {
                hasError= false;
                error= '';
            }
            break;
        default:
            break;    
        }
    return {hasError,error}
}

export const UPDATED_FORM = 'UPDATED_FORM';

export const onInputChange = (name, value, dispatch, formState)=> {
    const {hasError,error}= validateInput( name, value)
    let isFormValid = true;

    for(const key in formState) {
        const item = formState[key];
        if(key !== name && hasError) {
            isFormValid= false;
            break;
        }else if(key !== name && item.hasError) {
            isFormValid= false;
            break;
        }
    }
    dispatch({
        type: UPDATED_FORM,
        data: {
            name,
            value,
            touched:false,
            isFormValid,
            error,
            hasError,
        }
    });
}

export const onFocusOut = (name, value, dispatch, formState)=> {
    const {hasError,error}= validateInput( name, value)
    let isFormValid = true;

    for(const key in formState) {
        const item = formState[key];
        if(key !== name && hasError) {
            isFormValid= false;
            break;
        }else if(key !== name && item.hasError) {
            isFormValid= false;
            break;
        }
    }
    dispatch({
        type: UPDATED_FORM,
        data: {
            name,
            value,
            touched:true,
            isFormValid,
            error,
            hasError,
        }
    });

}