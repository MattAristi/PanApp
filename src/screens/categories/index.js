import { CategoryItems } from "../../components";
import { FlatList } from "react-native"
import {categories} from '../../constants/data'
import {styles} from './styles';

const Categories = ({navigation}) => {
    const onSelected= (item) => {
        navigation.navigate('Products', {name: item.title, categoryId:item.id});
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