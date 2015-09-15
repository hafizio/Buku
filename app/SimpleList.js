'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  ListView
} = React;

var SimpleList = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(['a', 'b', 'c', 'a longer example', 'd', 'e', 'f', 'g', 'h', 'i'])
    };
  },

  _renderRow: function(rowData) {
    return (
      <Text style={styles.row}>{rowData}</Text>
    );
  },

  render: function() {
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
        />
      </View>
    );
  }
});

module.exports = SimpleList;
