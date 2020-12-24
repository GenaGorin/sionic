import AsyncStorage from '@react-native-community/async-storage';
import { sionic } from '../api/api';
export const SERVER_URL = 'https://test2.sionic.ru/';

const LOAD_PRODUCTS = 'PRODS/LOAD_PRODUCTS';
const CLEAR_PRODUCTS = 'PRODS/CLEAR_PRODUCTS';
const PUT_IN_CART = 'PRODS/PUT_IN_CART';
const SET_CART_FROM_STORAGE = 'PRODS/SET_CART_FROM_STORAGE';
const CLEAR_CART = 'PRODS/CLEAR_CART';
const SET_ORDERS_FROM_STORAGE = 'PRODS/SET_ORDERS_FROM_STORAGE';


const initialState = {
    prods: [],
    cart: [],
    orders: [],
}

export const prodsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PRODUCTS:
            return { ...state, prods: action.payload }
        case CLEAR_PRODUCTS:
            return { ...state, prods: [] }
        case PUT_IN_CART:
            return { ...state, cart: action.payload }
        case SET_CART_FROM_STORAGE:
            return { ...state, cart: action.payload }
        case CLEAR_CART:
            return {...state, cart: [], orders: action.payload}
        case SET_ORDERS_FROM_STORAGE:
            return {...state, orders: action.payload}
        default:
            return state
    }
}


export function getProducts(id) {
    return async dispatch => {
        try {
            dispatch(clearProducts());
            const response = await sionic.getProducts(id);
            const result = await getProductImages(response.data);
            dispatch({
                type: LOAD_PRODUCTS,
                payload: result
            })
        } catch (error) {
            console.log(error)
        }
    }
}

async function getProductImages(products) {
    let result = [];
    for (const prod of products) {
        let images = await sionic.getImages(prod.id);
        prod.images = images.data[0];
        result = [...result, prod];
    }
    return result;
}

export function clearProducts() {
    return {
        type: CLEAR_PRODUCTS,
    }
}

export function putInCart(products) {
    return {
        type: PUT_IN_CART,
        payload: products
    }
}

export function createOrderClearCart(data, cart) {
    return async dispatch => {
        let newOrder = {
            contactData: data,
            purchase: cart,
        }
        //await AsyncStorage.removeItem('local_orders');
        let localOrders = await AsyncStorage.getItem('local_orders');
        let arr = [...JSON.parse(localOrders), newOrder];
        await AsyncStorage.setItem('local_orders', JSON.stringify(arr));
        await AsyncStorage.setItem('local_cart', JSON.stringify([]));
        dispatch(clearCartAndCreateOrder(arr))
    }
}

function clearCartAndCreateOrder(orders) {
    return {
        type: CLEAR_CART,
        payload: orders
    }
}

export function putInStorage(product) {
    return async dispatch => {
        try {
            //await AsyncStorage.removeItem('local_cart');
            let localCart = await AsyncStorage.getItem('local_cart');
            let arr = checkCart(JSON.parse(localCart), product);
            let str = JSON.stringify(arr);
            await AsyncStorage.setItem('local_cart', str);
            dispatch(putInCart(arr));
        } catch (err) {
            console.log(err);
        }
    }
}

export function removeProductFromStorage(id) {
    return async dispatch => {
        try {
            let localCart = await AsyncStorage.getItem('local_cart');
            let arr = removeProduct(JSON.parse(localCart), id);
            let str = JSON.stringify(arr);
            await AsyncStorage.setItem('local_cart', str);
            dispatch(putInCart(arr));
        } catch (error) {
            console.log(error);
        }
    }
}

function removeProduct(products, id) {
    let res = products.filter(prod => prod.id != id);
    return res;
}

function checkCart(products, product) {
    if (products.some((prod) => prod.id === product.id)) {
        let res = products.map((prod, i) => {
            if (prod.id === product.id) {
                let count = prod.count + 1;
                let totalPrice = prod.price * count;
                let product = {
                    id: prod.id,
                    name: prod.name,
                    price: prod.price,
                    count,
                    totalPrice,
                }
                return product;
            } else {
                return prod;
            }
        })
        return res;
    } else {
        return [...products, product];
    }
}

export function setCartFromStorage() {
    return async dispatch => {
        try {
            let localCart = await AsyncStorage.getItem('local_cart');
            let arr = JSON.parse(localCart);
            if (arr.length != 0) {
                dispatch(setCart(arr));
            }
        } catch (err) {
            console.log(err);
        }
    }
}


function setCart(products) {
    return {
        type: SET_CART_FROM_STORAGE,
        payload: products
    }
}

export function setOrdersFromStorage() {
    return async dispatch => {
        try {
            let localCart = await AsyncStorage.getItem('local_orders');
            let arr = JSON.parse(localCart);
            if (arr.length != 0) {
                dispatch(setOrders(arr));
            }
        } catch (err) {
            console.log(err);
        }
    }
}


function setOrders(orders) {
    return {
        type: SET_ORDERS_FROM_STORAGE,
        payload: orders,
    }
}