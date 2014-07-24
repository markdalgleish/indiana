var React = require('react');
var Link = require('react-router-component').Link;

var div = React.DOM.div;

module.exports = React.createClass({

  render: function() {
    return (
      div({ className: 'HelloWorld' },
        div({ className: 'HelloWorld__text' },
          'Hello World'
        ),
        div({},
          Link({ href: '/goodbye' }, 'Say Goodbye')
        )
      )
    );
  }

});
