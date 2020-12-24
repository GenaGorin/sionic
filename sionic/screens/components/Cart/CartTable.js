import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CartProduct from './CartProduct';
import { table, buttons } from '../../../src/styles/styles'

const CartTable = ({ cart, sum, setCreateOrderMode }) => {

    return (<>

        <View style={table.cartHeader}>
            <View style={table.columnName}>
                <Text>Name</Text>
            </View>
            <View style={table.columnOther}>
                <Text>qty</Text>
            </View>
            <View style={table.columnOther}>
                <Text>Price</Text>
            </View>
            <View style={table.columnOther}>
                <Text>Persist</Text>
            </View>
            <View style={table.columnOther}>
                <Text>Add</Text>
            </View>
            <View style={table.columnOther}>
                <Text>remove</Text>
            </View>
        </View>
        {cart.map((prod, i) => <CartProduct key={i} prod={prod} />)}
        <View>
            <Text>Полная стоймость корзины - {sum}</Text>
        </View>
        <View>
            {cart.length != 0 &&
                <TouchableOpacity style={buttons.mainButton} onPress={() => setCreateOrderMode(true)}>
                    <Text style={buttons.buttonText}>Заказать</Text>
                </TouchableOpacity>
            }
        </View>
    </>
    )
}


export default CartTable;