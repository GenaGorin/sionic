import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Categories from '../screens/Categories';
import Products from '../screens/Products';
import Cart from '../screens/Cart';
import Orders from '../screens/Orders';

const AppNavigator = createBottomTabNavigator({
    Categories: Categories,
    Products: {
        screen: Products,
        navigationOptions: {
            title: 'Products',
        }
    },
    Cart: {
        screen: Cart,
        navigationOptions: {
            title: 'Cart',
        }
    },
    Orders: {
        screen: Orders,
        navigationOptions: {
            title: 'Orders',
        }
    },

}, {
    tabBarOptions: {
        showLabel: false,
    }
})

export default createAppContainer(AppNavigator)