import { Text, View } from 'react-native';

import react from 'react';
import {styles} from './styles';

const OrderDetail=({item})=>{
 return(

   <View style={styles.container}>
      <View style={styles.header}>
         <Text style={styles.titulo}>{item.title}</Text>
      </View>
      <View style={styles.content}>
         <Text style={styles.description}>{item.description}</Text>
         <View style={styles.priceContainer}>                                     
               <Text style={styles.quantity}>{item.quantity} unit{item.quantity>1 ? 's':''}</Text> 
               <Text style={styles.price}>${item.price} each</Text>  
               <Text style={styles.total}>Total: ${item.price * item.quantity}</Text>         
         </View>
      </View>
   </View>
    
 )   
}
export default OrderDetail