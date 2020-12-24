import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { table } from '../../../src/styles/styles';


const OrderProduct = ({ product}) => {
    return (
        <View style ={{flexDirection: 'row'}}>
            <Text style ={[table.columnName, {width: 150}]}>{product.name} </Text>
            <Text style ={[table.columnOther, {width: 80}]}>{product.count} </Text>
            <Text style ={[table.columnOther, {width: 80}]}>{product.price} </Text>
            <Text style ={[table.columnOther, {width: 80}]}>{product.totalPrice} </Text>
        </View>
    )
}


export default OrderProduct;