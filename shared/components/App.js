var React = require('react');
var Router = require('react-router-component');

var DOM = React.DOM;
var html = DOM.html;
var head = DOM.head;
var title = DOM.title;
var script = DOM.script;

var Pages = Router.Pages;
var Page = Router.Page;

var HelloWorld = require('./HelloWorld');
var GoodbyeWorld = require('./GoodbyeWorld');

module.exports = React.createClass({

  render: function() {
    return (
      html({},
        head({},
          title({}, 'Indiana')
        ),
        Pages({ path: this.props.path },
          Page({ path: '/', handler: HelloWorld }),
          Page({ path: '/goodbye', handler: GoodbyeWorld })
        ),
        script({ src: 'build/index.js' })
      )
    );
  }

});
