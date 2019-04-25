const React = require('react')

const Card = require('&/common/components/Card')
const CartStore = require('../stores/CartStore')
const ActionCreators = require('../actions/ActionCreators')

const getStateFromStore = () => {
  return {
    products: CartStore.getAddedProducts(),
    total: CartStore.getTotal()
  }
}

const CartContainer = React.createClass({
  getInitialState () {
    return getStateFromStore()
  },
  componentDidMount: function() {
    CartStore.addChangeListener(this.onChange)
  },
  componentWillUnmount: function() {
    CartStore.removeChangeListener(this.onChange)
  },
  onCheckoutClicked () {
    console.log('赶紧去结算')
    ActionCreators.cartCheckout(this.state.products)
  },
  onChange () {
    this.setState(getStateFromStore())
  },
  render () {
    return (
      <Card products={this.state.products} total={this.state.total} onCheckoutClicked={this.onCheckoutClicked}/>
    )
  }
})

module.exports = CartContainer