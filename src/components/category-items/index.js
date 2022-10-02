import { Text, TouchableOpacity, View } from "react-native"

import React from "react";
import {styles} from './styles';

const CategoryItems= ({item,onSelected}) => {
    return (
        <View style= {styles.container}>
            <TouchableOpacity
            style= {{...styles.contentContainer, backgroundColor: item.color}}
            onPress={()=> onSelected(item)}>
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )

}

export default CategoryItems