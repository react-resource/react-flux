const React  = require('react')

const ProductsList = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired
  },
  render () {
    const {title, children} = this.props
    return (
      <div className="shop-wrap">
        <h2 className="uk-h2">{ title }</h2>
        <div>{ children }</div>
      </div>
    )
  }
})

module.exports = ProductsList