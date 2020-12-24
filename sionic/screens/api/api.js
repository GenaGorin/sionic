import * as axios from 'axios';

const sionicApi = axios.create({
    crossdomain: true,
    baseURL: 'https://test2.sionic.ru/api/',
});


export const sionic = {
    getCategories() {
        return sionicApi.get('Categories');
    },
    getProducts(id) {
        return sionicApi.get('Products?sort=["name","ASC"]&range=[0,5]&filter={"category_id":'+id+'}')
    },
    getImages(id){
        return sionicApi.get('https://test2.sionic.ru/api/ProductImages?filter={%22product_id%22:'+id+'}')
    }
}