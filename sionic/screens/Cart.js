import React from 'react';
import { Text, Image, View } from 'react-native';
import { navbar } from '../src/styles/styles';
import Header from './components/header/Header';
import CartComponent from './components/Cart/CartComponent';

const Cart = ({ navigation }) => {
    return (
        <>
            <Header title={'Корзина'} />
            <CartComponent />
        </>
    )
}

Cart.navigationOptions = {
    tabBarIcon: ({ focused }) => <Image source={require('../src/images/Cart.png')} style={focused ? navbar.activeIcons : navbar.inactiveIcons} />
};

export default Cart;