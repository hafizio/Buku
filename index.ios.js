'use strict';

var React = require('react-native');
var SimpleList = require('./app/SimpleList');
var BookList = require('./app/BookList');
var {
  AppRegistry
} = React;

var Buku = React.createClass({
  render: function() {
    return (
      <BookList/>
    );
  }
});

AppRegistry.registerComponent('Buku', () => Buku);

