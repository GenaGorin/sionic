import React, { useState } from 'react';
import { View, ScrollView} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setCartFromStorage } from '../../redux/prodsReducer';
import { container} from '../../../src/styles/styles'
import CartTable from './CartTable';
import CartOrder from './CartOrder';

const CartComponent = () => {
    const dispatch = useDispatch();
    const [createOrderMode, setCreateOrderMode] = useState(false);
    let cart = useSelector(state => state.prods.cart);
    if (cart.length === 0) {
        dispatch(setCartFromStorage());
    }
    let sum = cart.reduce(function (sum, current) {
        return sum + current.totalPrice;
    }, 0);



    return (
        <ScrollView style={container.containerWrap}>
            <View style={container.container}>
                <View style={container.row}>
                    {createOrderMode
                        ? <CartOrder setCreateOrderMode={setCreateOrderMode} cart = {cart} />
                        : <CartTable sum={sum} cart={cart} setCreateOrderMode={setCreateOrderMode} />
                    }
                </View>
            </View>
        </ScrollView >
    )
}


export default CartComponent;