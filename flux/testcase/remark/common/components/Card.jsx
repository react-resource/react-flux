const React  = require('react')
const PropTypes = React.PropTypes


const Product = (props) => {
  return (
    <div>{ props.children }</div>
  )
}

const Card = React.createClass({
  propTypes: {
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
      })
    ).isRequired,
    total: PropTypes.any.isRequired,
    onCheckoutClicked: PropTypes.func.isRequired,
  },
  render () {
    const { products, total, onCheckoutClicked } = this.props
    const hasProducts = products.length > 0
    const productsNode = hasProducts ? 
                          products.map((item) => (
                            <Product key={item.id}>{item.title} - &euro;{item.price} x {item.quantity}</Product>
                          )) : <div>Please add some products to cart.</div>
    return (
      <div className="cart uk-panel uk-panel-box uk-panel-box-primary">
        <div className="uk-badge uk-margin-bottom">Your Cart</div>
        <div className="uk-margin-small-bottom">{ productsNode }</div>
        <div className="uk-margin-small-bottom">Total: &euro;{ total }</div>
        <button className="uk-button uk-button-large uk-button-success uk-align-right"
          onClick={ onCheckoutClicked } disabled={hasProducts ? '' : 'disabled'}>
          Checkout
        </button>
      </div>
    )
  }
})

module.exports = Card