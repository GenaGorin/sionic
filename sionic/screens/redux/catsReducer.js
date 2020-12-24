import { sionic } from '../api/api';
import AsyncStorage from '@react-native-community/async-storage';

const LOAD_CATEGORIES = 'CATS/LOAD_CATEGORIES';
const SET_CURRENT_CAT = 'CATS/SET_CURRENT_CAT';

const initialState = {
    selectedCat: {
        id: 11,
        name: 'est dolor consectetur',
    },
    cats: [],
}

export const catsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CATEGORIES:
            return { ...state, cats: action.payload }
        case SET_CURRENT_CAT:
            return { ...state, selectedCat: action.payload }
        default:
            return state
    }
}

export function getCategories() {
    return async dispatch => {
        try {
            const response = await sionic.getCategories();
            await initLocalStorage();
            dispatch({
                type: LOAD_CATEGORIES,
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function setCurrentCat(cat) {
    return {
        type: SET_CURRENT_CAT,
        payload: cat
    }
}

async function initLocalStorage() {
    try {
        //await AsyncStorage.removeItem('local_orders');
        //await AsyncStorage.removeItem('local_orders');
        let localCart = await AsyncStorage.getItem('local_cart');
        if (!localCart) {
            await AsyncStorage.setItem('local_cart', JSON.stringify([]));
        }
        let localOrders = await AsyncStorage.getItem('local_orders');
        if (!localOrders) {
            await AsyncStorage.setItem('local_orders', JSON.stringify([]));
        }
    } catch (error) {
        console.log(error);
    }
}