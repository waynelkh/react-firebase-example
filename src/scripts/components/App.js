var React = require('react');
var InputBox = require('./InputBox.js');
var ListView = require('./ListView.js');

var APP = React.createClass({
  render: function(){
    var simpleData = [
      { id: 0, text: '寫作業', isDone: false },
      { id: 1, text: '吃飯', isDone: true },
      { id: 2, text: '運動', isDone: false }];

    return (
    <div className="container">
      <header>
        <h1>myappp</h1>
        <h3>React Firebase example</h3>
      </header>
        <p>Hello React and react</p>
        <InputBox />
          <ListView todoList={simpleData} />
    </div>
    );
  }
});

module.exports = APP;

