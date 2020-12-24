import React from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';
import SingleProduct from './SingleProduct';
import {container} from '../../../src/styles/styles';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../loader/loader';
import { getProducts } from '../../redux/prodsReducer';
import { useEffect } from 'react';
import {SERVER_URL} from '../../redux/prodsReducer';

const Prods = () => {
    let currentCat = useSelector(state => state.cats.selectedCat);
    const dispatch = useDispatch();
    let prods = useSelector(state => state.prods.prods);
    useEffect(() => {
        dispatch(getProducts(currentCat.id));
    }, [currentCat]);
    return (
        <ScrollView style={container.containerWrap}>
            <View style={container.container}>
                <View style = {container.row}>
                    <Text>Товары категории - {currentCat.name}</Text>
                    {prods.length === 0 && <Loader />}
                    {prods.map(cat => <SingleProduct url = {SERVER_URL + cat.images.image_url} description ={cat.description} name={cat.name} id={cat.id} key={cat.id} price={cat.price} />)}
                </View>
            </View>
        </ScrollView>
    )
}

export default Prods;