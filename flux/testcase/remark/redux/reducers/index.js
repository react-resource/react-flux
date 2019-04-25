const { combineReducers } = require('redux')

const { products } = require('./products')
const { cart } = require('./cart')

exports.getCartProducts = (state) => {
  const { cart, products} = state
  const { addedIds, quantityById } = cart
  const { byId } = products
  return addedIds.map( id => ({
    ...byId[id],
    quantity: quantityById[id]
  }))
}

exports.getTotal = (state) => {
  const { cart, products} = state
  const { addedIds, quantityById } = cart
  const { byId } = products
  return addedIds.reduce((total, id) => 
    total + byId[id].price * quantityById[id]
  , 0).toFixed(2)
}


exports.reducers = combineReducers({
  cart,
  products
})