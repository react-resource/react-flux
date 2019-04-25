const React = require('react')
const { connect } = require('react-redux')
const { addToCart } = require('../actions')
const { getVisibleProducts } = require('../reducers/products')
const ProductItem = require('&/common/components/ProductItem-new')
const ProductsList = require('&/common/components/ProductsList-new')

class ProductsContainer extends React.Component {
	render() {
		const { products, addToCart } = this.props;
		return (
			<ProductsList title="Flux Shop Demo (Redux)">
				{
					products.map(product =>
						(<ProductItem
							key={product.id}
							product={product}
							onAddToCartClicked={() => addToCart(product.id)}
						/>)
					)
				}
			</ProductsList>
		);
	}
}

function mapStateToProps(state) {
	return {
		products: getVisibleProducts(state.products)
	}
}

module.exports = connect(
	mapStateToProps,
	{ addToCart }
)(ProductsContainer)
