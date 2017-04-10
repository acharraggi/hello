import Expo from 'expo';
import React, { Component } from 'react';
import { StyleSheet, ListView, Text, View } from 'react-native';

class App extends React.Component {

  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }
  render() {
    return (
        <View style={{flex: 1, paddingTop: 22}}>
              <ListView
                  dataSource={this.state.dataSource}
                  renderRow={(rowData) => <Text>{rowData}</Text>}
              />
        </View>
    );
  }
}

Expo.registerRootComponent(App);
