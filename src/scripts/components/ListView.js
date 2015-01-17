var React = require('react');
var ListItem = require('./ListItem.js');

var ListView = React.createClass({

  propTypes: {
    todoList: React.PropTypes.array.isRequired
  },

  RemoveItem: function(){
    console.log("Click Delete");
  },

  render: function(){

  var listItem = this.props.todoList.map(function(item,j){
    return <ListItem key={j} text={item.text} isDone={item.isDone} onRemove={this.RemoveItem} />;
  }.bind(this));

    return (
    <div className="panel panel-default">
      <div className="panel-heading">待辦事項</div>
      <div className="panel-body">{listItem}</div>
    </div>
    );
  }
});

module.exports = ListView;

