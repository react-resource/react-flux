// Flux 架构入门教程 http://www.ruanyifeng.com/blog/2016/01/flux.html
// Flux应用架构 https://www.cnblogs.com/tomblog/p/4841312.html
// react及flux架构范例Todomvc分析 https://www.cnblogs.com/linerz/p/react-flux-example-todomvc-analysis.html
// 15种方法实现flux架构 https://github.com/voronianski/flux-comparison

var React = require('react');
var ReactDOM = require('react-dom');

// 组件的名字不是 MyButton，而是 MyButtonController。这是为什么？这里，我采用的是 React 的 controller view 模式
var MyButtonController = require('./components/MyButtonController');

ReactDOM.render(
  <MyButtonController/>,
  document.querySelector('#app')
);