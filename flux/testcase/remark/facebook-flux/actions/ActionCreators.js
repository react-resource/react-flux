const AppDispatcher = require('../dispatcher/AppDispatcher')
const Constants     = require('../constants')
const WebAPIUtils   = require('../utils/WebAPIUtils')
const ActionsCreators = exports

ActionsCreators.cartCheckout = (products) => {
  AppDispatcher.handleViewAction({
    type: Constants.ActionTypes.CART_CHECKOUT,
    products: products
  })
  // WebAPIUtils.checkoutProducts(products);
}

ActionsCreators.finishCheckout = (products) =>{
  AppDispatcher.handleServerAction({
    type: Constants.ActionTypes.SUCCESS_CHECKOUT,
    products: products
  })
}

ActionsCreators.receiveProducts = (products) => {
  AppDispatcher.handleServerAction({
    type: Constants.ActionTypes.RECEIVE_PRODUCTS,
    products: products
  })
}

ActionsCreators.addToCart = function (product) {
  AppDispatcher.handleViewAction({
      type: Constants.ActionTypes.ADD_TO_CART,
      product: product
  });
}