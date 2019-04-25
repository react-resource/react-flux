const keymirror = require('keymirror')

module.exports = {
  "ActionTypes": keymirror({
    CART_CHECKOUT: null,
    SUCCESS_CHECKOUT: null,
    RECEIVE_PRODUCTS: null,
    ADD_TO_CART: null
  }),
  "PayloadSources": keymirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })
}