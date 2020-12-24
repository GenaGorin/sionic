import React from 'react';
import { Image } from 'react-native';
import {navbar} from '../src/styles/styles';
import Header from './components/header/Header';
import Prods from './components/products/Prods';

const Products = ({navigation}) => {
    return (
        <>
            <Header title = {'Товары'} />
            <Prods />
        </>
    )
}

Products.navigationOptions = {
    tabBarIcon: ({focused}) => <Image source={require('../src/images/Grid.png')} style={focused ? navbar.activeIcons : navbar.inactiveIcons} />
};

export default Products;