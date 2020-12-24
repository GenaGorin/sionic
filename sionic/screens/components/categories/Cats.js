import React from 'react';
import { View, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import SingleCategory from './SingleCategory';
import { container } from '../../../src/styles/styles';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, setCurrentCat } from '../../redux/catsReducer';
import Loader from '../loader/loader';

const Cats = ({ navigation }) => {
    let cats = useSelector(state => state.cats.cats);
    const dispatch = useDispatch();
    if (cats.length === 0) {
        dispatch(getCategories())
    }

    const goToProducts = (cat) => {
        dispatch(setCurrentCat(cat));
        navigation.navigate('Products')
    }

    return (
        <ScrollView style={container.containerWrap}>
            <View style={container.container}>
                <View style={container.row}>
                    {cats.length === 0 && <Loader />}
                    {cats.map(cat => <SingleCategory name={cat.name} id={cat.id} key={cat.id} goToProducts={goToProducts} />)}
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    catsWrap: {
        marginTop: 20,
    },
});

export default Cats;