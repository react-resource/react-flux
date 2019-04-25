const React   = require('react')
const ProductItem = require('&/common/components/ProductItem')
const ProductsList = require('&/common/components/ProductsList')
const ProductStore = require('../stores/ProductStore')
const ActionCreators = require('../actions/ActionCreators')


const getStateFromStores = () => {
  return {
    products: ProductStore.getAllProducts()
  }
}

const ProductItemContainer = React.createClass({
  onAddToCartClicked () {
    ActionCreators.addToCart(this.props.product)
  },
  render () {
    return (
      <ProductItem product={this.props.product} onAddToCartClicked={this.onAddToCartClicked}/>
    )
  }
})

const ProductsListContainer = React.createClass({
  getInitialState () {
    return getStateFromStores()
  },
  componentDidMount () {
    ProductStore.addChangeListener(this.onChange);
  },

  componentWillUnmount () {
    ProductStore.removeChangeListener(this.onChange);
  },
  onChange () {
    this.setState(getStateFromStores())
  },
  render () {
    const nodes =  this.state.products.map(function (product) {
      return <ProductItemContainer key={product.id} product={product} />;
    })
    return (
      <ProductsList title="Flux Shop Demo (Facebook)">
        { nodes }
      </ProductsList>
    )
  }
})

module.exports = ProductsListContainer