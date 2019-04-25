const React  = require('react')

const CartContainer = require('./CartContainer')
const ProductsContainer = require('./ProductsContainer')

const App = React.createClass({
  render () {
    return (
      <div>
        <CartContainer />
        <ProductsContainer />
      </div>
    )
  }
})

module.exports = App