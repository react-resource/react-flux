'use strict';

var Marty = require('marty');

var CartConstants = Marty.createConstants([
    'ADD_TO_CART',
    'CART_CHECKOUT',
    'SUCCESS_CHECKOUT',
    'CHECKOUT_FAILED'
]);

module.exports = CartConstants;
