var React = require('react');

var ListItem = React.createClass({

  propTypes: {
    text: React.PropTypes.string.isRequired,
    isDone: React.PropTypes.bool.isRequired,
    onRemove: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      text: '',
      isDone: false
    };
  },
  handleRemove: function(evt){
    evt.stopPropagation();
    if(this.props.onRemove){
      this.props.onRemove();
    }
  },
  render: function(){
    return (
    <p>
      Event: {this.props.text}
      <span className="glyphicon glyphicon-remove" onClick={this.handleRemove}></span>
    </p>
    );
  }
});

module.exports = ListItem;

