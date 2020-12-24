import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { table } from '../../../src/styles/styles';
import OrderProduct from './OrderProduct'


const SingleOrder = ({ order }) => {
    let sum = order.purchase.reduce(function (sum, current) {
        return sum + current.totalPrice;
    }, 0);
    return (
        <View style={{ borderBottomWidth: 1, borderBottomColor: 'gray' }}>
            <Text>Покупатель</Text>
            <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                <Text>{order.contactData.name} </Text>
                <Text>{order.contactData.adress} </Text>
                <Text>{order.contactData.phone} </Text>
            </View>
            <Text>Покупки</Text>
            <View style={{ flexDirection: 'row' }}>
                <Text style={[table.columnName, { width: 150 }]}>Name </Text>
                <Text style={[table.columnOther, { width: 80 }]}>qty </Text>
                <Text style={[table.columnOther, { width: 80 }]}>price </Text>
                <Text style={[table.columnOther, { width: 80 }]}>persistence </Text>
            </View>
            {order.purchase.map((product, i) => <OrderProduct key={i} product={product} />)}
            <View style ={{marginBottom: 10, marginTop: 10}}>
                <Text>Сумма заказа - {sum}</Text>
            </View>
        </View>
    )
}


export default SingleOrder;