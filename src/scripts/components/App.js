var React = require('react');
var InputBox = require('./InputBox.js');

var APP = React.createClass({
  render: function(){
    return (
    <div>
      <header>
        <h1>myapp</h1>
        <h3>React Firebase example</h3>
      </header>
        <p>Hello React and react</p>
        <InputBox />
    </div>
    );
  }
});

module.exports = APP;

