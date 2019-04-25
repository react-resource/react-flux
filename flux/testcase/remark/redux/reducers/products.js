const { combineReducers } = require('redux')
const {
  RECEIVE_PRODUCTS,
  ADD_TO_CART
} = require('../constants')

const product = (state) => {
  state.inventory -= 1
  return state
}

const getProduct = (state, id) => {
  return state.byId[id]
}


const byId = (state = {}, action) => {
  const { type } = action
  switch (type) {
    case RECEIVE_PRODUCTS:
      const { products } = action
      return {
        ...state,
        ...products.reduce((obj, product) => {
          obj[product.id] = product
          return obj
        }, {})
      }
    case ADD_TO_CART:
      const { productId } = action
      return {
        ...state,
        [productId]: product(state[productId])
      }
    default: 
      return state
  }
}

const usableIds = (state = [], action) => {
  const { type, products } = action
  switch(type) {
    case RECEIVE_PRODUCTS:
      return products.map(product => product.id)
    default:
      return state
  }
}

exports.getProduct = getProduct

exports.products = combineReducers({
  byId,
  usableIds
})


exports.getVisibleProducts = (state) => {
  return state.usableIds.map(id => getProduct(state, id))
}