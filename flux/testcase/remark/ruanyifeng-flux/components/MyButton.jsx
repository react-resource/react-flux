var React = require('react');

var MyButton = function(props) {
  var items = props.items;
  var itemHtml = items.map(function (listItem, i) {
    return <li key={i}>{listItem} <span onClick={() => props.onDelete(i)}>删除</span></li>;
  });

  return <div>
    <ul>{itemHtml}</ul>
    <button onClick={props.onAdd}>New Item</button>
  </div>;
};

module.exports = MyButton;
