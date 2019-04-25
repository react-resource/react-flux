const React  = require('react')
const PropTypes = React.PropTypes

const ProductItem = React.createClass({
  propTypes: {
    product: PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.any.isRequired,
      inventory: PropTypes.number.isRequired
    }).isRequired,
    onAddToCartClicked: PropTypes.func.isRequired
  },
  render () {
    const { product, onAddToCartClicked} = this.props
    return (
      <div className="uk-panel uk-panel-box uk-margin-bottom">
        <img className="uk-thumbnail uk-thumbnail-mini uk-align-left" src={`../${product.image}`} />
        <div>
          <h4 className="uk-h4">{product.title} - &euro;{product.price}</h4>
          <p>inventory: { product.inventory }</p>
        </div>
        <button className="uk-button uk-button-small uk-button-primary"
          onClick={ onAddToCartClicked }
          disabled={product.inventory > 0 ? '' : 'disabled'}>
          {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
        </button>
      </div>
    )
  }
})

module.exports = ProductItem