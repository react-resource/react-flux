import { Actions } from 'flummox';
import { checkoutProducts, getAllProducts } from '../utils/WebAPIUtils';

export default class AppActions extends Actions {

    async getAllProducts() {
        let products = await getAllProducts();

        this.receiveProducts(products);
    }

    receiveProducts(products) {
        return products;
    }

    addToCart(product) {
        return product;
    }

    async cartCheckout(products) {
        this.beginCheckout();

        products = await checkoutProducts(products);

        this.finishCheckout(products);
    }

    beginCheckout() {
        return true;
    }

    finishCheckout(products) {
        return products;
    }

}
