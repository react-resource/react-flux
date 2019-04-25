const { combineReducers } = require('redux')
const {
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE
} = require('../constants')

const initialState = {
  addedIds: [],
  quantityById: {}
}

const addedIds = (state = initialState.addedIds, action) => {
  const { type } = action
  switch(type){
    case ADD_TO_CART:
      const { productId } = action
      return state.indexOf(productId) > -1 ? state : [...state, productId]
    default:
      return state
  }
}

const quantityById = (state = initialState.quantityById, action) => {
  const { type } = action
  switch(type){
    case ADD_TO_CART:
      const { productId } = action
      return {
        ...state,
        [productId]: (state[productId] || 0) +  1
      }
    default:
      return state
  }
}

const cart = (state = initialState, action) => {
  const { type } = action
  switch(type) {
    case CHECKOUT_REQUEST:
      return initialState
    case CHECKOUT_FAILURE:
      return action.cart
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action)
      }
  }
}

exports.cart = combineReducers({
  cart,
  addedIds,
  quantityById
})