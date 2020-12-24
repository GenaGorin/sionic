import React from 'react';
import { Image } from 'react-native';
import {navbar} from '../src/styles/styles';
import Cats from './components/categories/Cats';
import Header from './components/header/Header';

const Categories = ({navigation}) => {

    return (
        <>
            <Header title = {'Категории'} />
            <Cats navigation ={navigation} />
        </>
    )
}

Categories.navigationOptions = {
    tabBarIcon: ({focused}) => <Image source={require('../src/images/Home.png')} style={focused ? navbar.activeIcons : navbar.inactiveIcons} />
};

export default Categories;