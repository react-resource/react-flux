var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

// Store对外只暴露getter，不允许提供setter！！禁止在任何地方直接操作Store
var ListStore = assign({}, EventEmitter.prototype, {
  items: [],

  getAll: function () {
    return this.items;
  },

  addNewItemHandler: function (text) {
    this.items.push(text);
  },

  removeItemHandler: function (idx) {
    this.items.splice(idx, 1)
  },

  emitChange: function () {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }
});

module.exports = ListStore;
