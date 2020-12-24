import React from 'react';
import { Text, View } from 'react-native';
import { screenHeader} from '../../../src/styles/styles';

const Header = ({title}) => {
    return (
        <>
            <View style = {screenHeader.headerWrap}>
                <Text style = {screenHeader.header}>{title}</Text>
            </View>
        </>
    )
}


export default Header;