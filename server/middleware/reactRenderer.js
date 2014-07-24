var url = require('url');
var React = require('react');

var App = require('../../shared/components/app');

module.exports = function() {
  return function(req, res, next) {
    try {
      var path = url.parse(req.url).pathname;
      var app = App({ path: path });
      var markup = React.renderComponentToString(app);
      res.send(markup);
    } catch(err) {
      return next(err);
    }
  };
};
