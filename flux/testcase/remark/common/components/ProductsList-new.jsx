const React  = require('react')
const PropTypes = require('prop-types')

class ProductsList extends React.Component {
  render () {
    const {title, children} = this.props
    return (
      <div className="shop-wrap">
        <h2 className="uk-h2">{ title }</h2>
        <div>{ children }</div>
      </div>
    )
  }
}

ProductsList.propTypes = {
  title: PropTypes.string.isRequired
}

module.exports = ProductsList