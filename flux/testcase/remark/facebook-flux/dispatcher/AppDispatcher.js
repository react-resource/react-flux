const Dispatcher = require('flux').Dispatcher
const Constants  = require('../constants')

const AppDispatcher = new Dispatcher()

AppDispatcher.handleViewAction = function(action) {
  const payload = {
    source: Constants.PayloadSources.VIEW_ACTION,
    action: action
  };
  this.dispatch(payload);
}

AppDispatcher.handleServerAction = function(action) {
  const payload = {
    source: Constants.PayloadSources.SERVER_ACTION,
    action: action
  };
  this.dispatch(payload);
}

module.exports = AppDispatcher

