import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { buttons, close, } from '../../../src/styles/styles';
import {createOrderClearCart} from '../../redux/prodsReducer';

const CartOrder = ({ setCreateOrderMode, cart }) => {
    const [name, setName] = React.useState('');
    const [adress, setAdress] = React.useState('');
    const [phone, setPhone] = React.useState('');
    
    const dispatch = useDispatch();

    const createOrder = () => {
        if (!name || !adress || !phone) {
            Alert.alert('Заполните все поля');
        } else {
            dispatch(createOrderClearCart({name, adress, phone}, cart))
            setCreateOrderMode(false)
        }
    }

    return (<>
        <View>
            <TouchableOpacity onPress={() => setCreateOrderMode(false)} style={close.closeWindow}>
                <Image source={require('../../../src/images/close.png')} style={{ width: 30, height: 30 }} />
            </TouchableOpacity>
            <View>
            </View>
            <View style={{ marginTop: 50 }}>
                <TextInput
                    style={buttons.input}
                    onChangeText={text => setName(text)}
                    value={name}
                    placeholder = {'Name'}
                />
                <TextInput
                    style={buttons.input}
                    onChangeText={text => setAdress(text)}
                    value={adress}
                    placeholder = {'Adress'}
                />
                <TextInput
                    style={buttons.input}
                    onChangeText={text => setPhone(text)}
                    keyboardType = 'numeric'
                    value={phone}
                    placeholder = {'Phone'}
                />
            </View>
            <TouchableOpacity style={buttons.mainButton} onPress={createOrder}>
                <Text style={buttons.buttonText}>Оформить заказ</Text>
            </TouchableOpacity>
        </View>
    </>
    )
}


export default CartOrder;