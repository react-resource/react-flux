const EventEmitter  = require('events').EventEmitter
const assign        = require('object-assign')

const AppDispatcher = require('../dispatcher/AppDispatcher')
const Constants = require('../constants')
const ProductStore = require('./ProductStore');
const ActionTypes = Constants.ActionTypes

const CHANGE_EVENT  = 'change'
let _products = {}

const addToCart = (product) => {
  const id = product.id
  product.quantity = id in _products ? _products[id].quantity + 1 : 1
  _products[id] = assign({}, product)
}

const CartStore = assign({}, EventEmitter.prototype, {
  getAddedProducts () {
    return Object.keys(_products).map((i) => _products[i])
  },
  getTotal () {
    let total = 0
    for(let i in _products) {
      const product = _products[i]
      total += product.price * product.quantity
    }
    return total.toFixed(2)
  },
  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(fn) {
    this.on(CHANGE_EVENT, fn)
  },
  removeChangeListener: function(fn) {
    this.removeListener(CHANGE_EVENT, fn)
  }
})

CartStore.dispatchToken = AppDispatcher.register(({action}) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
        AppDispatcher.waitFor([ProductStore.dispatchToken])
        addToCart(action.product)
        CartStore.emitChange()
        break;
    case ActionTypes.CART_CHECKOUT:
      _products = {}
      CartStore.emitChange()
      break;
    case ActionTypes.SUCCESS_CHECKOUT:
      // this can be used to redirect to success page, etc.
      console.log('YOU BOUGHT:', action.products);
      break;
    default:
  }
})



module.exports = CartStore