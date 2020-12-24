import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';

const SingleCategory = ({name, id, goToProducts}) => {

    return (
        <TouchableOpacity style={styles.catWrap} onPress = {() => goToProducts({id, name})}>
            <Image source={require('../../../src/images/clothes.png')} style={{ width: 80, height: 80 }} />
            <View style={styles.catContentWrap}>
                <Text style={styles.catHeader}>{name}</Text>
                <Text style={styles.productCount}> 1000 товаров</Text>
            </View>
            <View style={styles.arrowWrap}>
                <Image source={require('../../../src/images/arrow.png')} style={{ width: 30, height: 30 }} />
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    catWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        marginBottom: 5,
    },
    catContentWrap: {
        minWidth: 250,
        justifyContent: 'center',
        paddingLeft: 10
    },
    catHeader: {
        fontSize: 22,
        color: 'black',
    },
    productCount: {
        color: '#FF2988',
        fontSize: 15
    },
    arrowWrap: {
        justifyContent: 'center',
        paddingRight: 10,
    }
});

export default SingleCategory;