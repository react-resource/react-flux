const EventEmitter = require('events').EventEmitter
const assign = require('object-assign')

const AppDispatcher = require('../dispatcher/AppDispatcher')
const Constants = require('../constants');

const ActionTypes = Constants.ActionTypes;
const CHANGE_EVENT = 'change'
let _products = []

const decreaseInventory = (product) => {
  product.inventory = product.inventory > 0 ? product.inventory-1 : 0;
}


const ProductStore = assign({}, EventEmitter.prototype, {
  getAllProducts: function () {
    return _products;
  },
  emitChange () {
    this.emit(CHANGE_EVENT)
  },
  addChangeListener (fn) {
    this.on(CHANGE_EVENT, fn)
  },
  removeChangeListener (fn) {
    this.removeListener(CHANGE_EVENT, fn)
  }
})

ProductStore.dispatchToken = AppDispatcher.register(({action}) => {
  switch (action.type) {
    case ActionTypes.RECEIVE_PRODUCTS:
      _products = action.products
      ProductStore.emitChange()
      break;
    case ActionTypes.ADD_TO_CART:
      decreaseInventory(action.product)
      ProductStore.emitChange()
      break;
    default:
  }
})

module.exports = ProductStore