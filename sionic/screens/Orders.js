import React from 'react';
import { Text, Image, View } from 'react-native';
import { navbar } from '../src/styles/styles';
import Header from './components/header/Header';
import OrderComponent from './components/Orders/OrdersComponent';

const Orders = ({ navigation }) => {

    return (
        <>
            <Header title = {'Заказы'} />
            <OrderComponent />
        </>
    )
}

Orders.navigationOptions = {
    tabBarIcon: ({ focused }) => <Image source={require('../src/images/Avatar.png')} style={focused ? navbar.activeIcons : navbar.inactiveIcons} />
};

export default Orders;