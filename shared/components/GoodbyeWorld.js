var React = require('react');
var Link = require('react-router-component').Link;

var div = React.DOM.div;

module.exports = React.createClass({

  render: function() {
    return (
      div({ className: 'GoodbyeWorld' },
        div({ className: 'GoodbyeWorld__text' },
          'Goodbye World'
        ),
        div({},
          Link({ href: '/' }, 'Go Home')
        )
      )
    );
  }

});
