const React = require('react')
const { connect } = require('react-redux')
const { checkout } = require('../actions')
const { getTotal, getCartProducts } = require('../reducers')
const Cart = require('&/common/components/Card-new')

class CartContainer extends React.Component {
	render() {
		const { products, total, checkout } = this.props
		return (
			<Cart
				products={products} total={total}
				onCheckoutClicked={() => checkout()}
			/>
		);
	}
}

function mapStateToProps(state) {
	return {
		products: getCartProducts(state),
		total: getTotal(state)
	}
}

module.exports = connect( 
	mapStateToProps, 
	{ checkout} 
)(CartContainer);
