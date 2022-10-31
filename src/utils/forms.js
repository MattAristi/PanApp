const formatEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const minPasswordLenght= 6;
export const UPDATED_FORM = 'UPDATED_FORM';

const validateInput= (name, value) => {
    let hasError=false;
    let error = '';
    switch(name) {
    case 'email':
        if (value.trim()==='') {
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
            if (value.trim()==='') {
                hasError= true;
                error= `El password es requerido`
            }else if(value.lenght < minPasswordLenght){
                hasError= true;
                error=`El password no es valido, debe tener al menos ${minPasswordLenght} digitos.`
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

export const onInputChange = (name, value, dispatch, formState)=> {
    const {hasError,error}= validateInput(name,value)

}