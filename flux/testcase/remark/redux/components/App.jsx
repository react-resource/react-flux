const React  = require('react')
const ProductsContainer  = require('./ProductsContainer')
const CartContainer  = require('./CartContainer')

class App extends React.Component {
	render() {
		return (
			<div>
				<ProductsContainer />
				<CartContainer />
			</div>
		)
	}
}

module.exports = App