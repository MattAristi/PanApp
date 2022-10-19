import { useDispatch, useSelector } from "react-redux";

import { CategoryItems } from "../../components";
import { FlatList } from "react-native"
import {selectCategory} from '../../store/actions/category.action';
import store from '../../../src/store/index';
import {styles} from './styles';

const Categories = ({navigation, route}) => {
    dispatch= useDispatch()
    const categories = useSelector((state) => state.category.categories)
   
    const onSelected= (item) => {
        dispatch(selectCategory(item.id))
        navigation.navigate('Products', {name: item.title});
    }
    const renderItem = ({item}) =>  <CategoryItems item={item} onSelected={onSelected}/>
       
    return (
        <FlatList
        style={styles.containerList}
        data={categories}
        renderItem= {renderItem}
        keyExtractor= {item=> item.id.toString()}

        />
    )
}

export default Categories