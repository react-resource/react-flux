/**
 * 参考链接：
 * redux原来如此简单  https://segmentfault.com/a/1190000016311891
 * 阅读redux源码      https://segmentfault.com/a/1190000009146720
 */
const React  = require('react')
const ReadtDom = require('react-dom')
const { Provider } = require('react-redux')
const { createStore, applyMiddleware, compose } = require('redux')
const { logger } = require('redux-logger')
const thunk  = require('redux-thunk').default

require('&/common/css/uikit.almost-flat.min.css')
require('&/common/css/main.css')

const { reducers } = require('./reducers')
const { getAllProducts } = require('./actions')
const App = require('./components/App')
const middlewares = process.env.NODE_ENV === 'production' ? [thunk] : [thunk, logger]
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
const store = createStoreWithMiddleware(reducers)

store.dispatch(getAllProducts())

ReadtDom.render(
  <Provider store={ store }>
    <App/>
  </Provider>,
  document.getElementById('app')
)


