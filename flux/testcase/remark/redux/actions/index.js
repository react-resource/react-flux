const { getProducts } = require('&/common/api/shop')
const { buyProducts } = require('&/common/api/shop')
const {
  RECEIVE_PRODUCTS,
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_SUCCESS
} = require('../constants')

exports.getAllProducts = () => dispatch => {
  getProducts( products => {
    dispatch({
      type:RECEIVE_PRODUCTS,
      products: products
    })
  })
}

exports.addToCart = (id) => (dispatch, getState) => {
  const product = getState().products.byId[id]
  if(product.inventory > 0){
    dispatch({
      type: ADD_TO_CART,
      productId: id
    })
  }
}

exports.checkout = (products) => (dispatch,getState) => {
  const { cart } = getState()
  dispatch({type: CHECKOUT_REQUEST})
  buyProducts(products, () => {
    dispatch({ type: CHECKOUT_SUCCESS, cart })
  })
}