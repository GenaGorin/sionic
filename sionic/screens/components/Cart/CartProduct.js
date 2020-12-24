import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { table } from '../../../src/styles/styles'
import { putInStorage, removeProductFromStorage } from '../../redux/prodsReducer';


const CartComponent = ({ prod }) => {
    const dispatch = useDispatch();

    const addProductOnCart = (id) => {
        dispatch(putInStorage({ id: id }));
    }

    const removeProductFormCart = (id) => {
        dispatch(removeProductFromStorage(id))
    }

    return (
        <View style={table.cartHeader}>
            <View style={table.columnName}>
                <Text>{prod.name}</Text>
            </View>
            <View style={table.columnOther}>
                <Text>{prod.count}</Text>
            </View>
            <View style={table.columnOther}>
                <Text>{prod.price}</Text>
            </View>
            <View style={table.columnOther}>
                <Text>{prod.totalPrice}</Text>
            </View>
            <View style={table.columnOther}>
                <TouchableOpacity style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}} onPress={() => addProductOnCart(prod.id)}>
                    <Text>+</Text>
                </TouchableOpacity>
            </View>
            <View style={table.columnOther}>
                <TouchableOpacity style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}} onPress = {()=> removeProductFormCart(prod.id)}>
                    <Text>-</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default CartComponent;