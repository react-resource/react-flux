const React  = require('react')
const ReactDOM = require('react-dom');

require('&/common/css/uikit.almost-flat.min.css')
require('&/common/css/main.css')
const WebAPIUtils = require('./utils/WebAPIUtils');
const App = require('./components/App')

WebAPIUtils.getAllProducts()

ReactDOM.render(
  React.createElement(App),
  document.getElementById('app')
)