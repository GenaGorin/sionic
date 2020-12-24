import React, { useState } from 'react';
import { View, ScrollView, Text} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setOrdersFromStorage } from '../../redux/prodsReducer';
import { container} from '../../../src/styles/styles';
import SingleOrder from './SingleOrder';


const OrderComponent = () => {
    const dispatch = useDispatch();
    let orders = useSelector(state => state.prods.orders);
    if (orders.length === 0) {
        dispatch(setOrdersFromStorage());
    }
    return (
        <ScrollView style={container.containerWrap}>
            <View style={container.container}>
                <View style={container.row}>
                    {orders.map((order, i) => <SingleOrder key={i} order={order} />)}
                </View>
            </View>
        </ScrollView >
    )
}


export default OrderComponent;