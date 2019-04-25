var AppDispatcher = require('../dispatcher/AppDispatcher');

var ButtonActions = {

  addNewItem: function (text) {
    AppDispatcher.dispatch({
      actionType: 'ADD_NEW_ITEM',
      text: text
    });
  },

  removeItem: function(idx){
    AppDispatcher.dispatch({
      actionType: 'DELETE_ITEM',
      index: idx
    });
  }

};

module.exports = ButtonActions;
