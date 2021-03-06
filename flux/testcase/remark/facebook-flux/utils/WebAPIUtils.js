var shop = require('&/common/api/shop')
var ActionCreators = require('../actions/ActionCreators')

module.exports = {
  getAllProducts () {
    shop.getProducts(function (products) {
      ActionCreators.receiveProducts(products)
    })
  },
  checkoutProducts (products) {
    shop.buyProducts(products, function () {
      ActionCreators.finishCheckout(products)
    })
  }
}
