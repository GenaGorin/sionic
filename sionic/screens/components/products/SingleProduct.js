import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {buttons} from '../../../src/styles/styles';
import AsyncStorage from '@react-native-community/async-storage'
import { putInCart, putInStorage} from '../../redux/prodsReducer';
import { useDispatch } from 'react-redux';

const SingleProduct = ({ name, id, price, description, url}) => {
    const dispatch = useDispatch();
    
    const putOnLocalStorage = () => {
        dispatch(putInStorage({id, price, name, count: 1, totalPrice: price}));
    }

    return (
        <View style={styles.catWrap} >
            <View style={styles.singleProductWrap}>
                <Image source={{uri: url}} style={{ width: '100%', height: 160 }} />
            </View>
            <View style={styles.catContentWrap}>
                <Text style={styles.prodInfo}>{name}</Text>
                <Text style={[styles.prodInfo, {fontWeight: 'bold'}]}> {price}</Text>
            </View>
            <View>
                <Text>{description}</Text>
            </View>
            <TouchableOpacity style = {buttons.mainButton} onPress = {putOnLocalStorage}>
                <Text style = {buttons.buttonText}>В корзину</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    catWrap: {
        marginTop: 5,
        marginBottom: 5,
    },
    catContentWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    prodInfo: {
        fontSize: 15,
        color: 'black',
        marginTop: 10,
    },
});

export default SingleProduct;