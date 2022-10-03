import { Button, FlatList, Text, View } from "react-native"

import ProductItem from "../../components";
import {products} from '../../constants/data';

const Products = ({navigation, route}) => {
    const {categoryId}=route.params;
    const productsFiltered = products.filter(product => product.categoryId === categoryId);

    const onSelected = (item)=> {
        console.warn('item',item);
    }
    const renderItem= ({item})=> <ProductItem item={item} onSelected={onSelected}></ProductItem>
    return (
        <FlatList
            data={productsFiltered}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
        />
    )
}

export default Products