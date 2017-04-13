'use strict';

import Expo from 'expo';
import React, { Component } from 'react';
import {ListView, Text, View, TouchableHighlight} from 'react-native';
import {FadeInView} from './FadeInView';

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

  _onPressButton() {
    console.log("You tapped the button!");
  }

  render() {
    return (
        <View style={{flex: 1, paddingTop: 22}}>
              <ListView
                  dataSource={this.state.dataSource}
                  renderRow={(rowData) => <Text>{rowData}</Text>}
              />
          <TouchableHighlight onPress={this._onPressButton}>
            <Text>Button</Text>
          </TouchableHighlight>
          <Text>Hey there</Text>
          <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
            <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
          </FadeInView>
        </View>
    );
  }
}

Expo.registerRootComponent(App);
