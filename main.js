'use strict';

import Expo from 'expo';
import React, {Component} from 'react';
import {StyleSheet, ListView, Text, View} from 'react-native';
import {FadeInView} from './FadeInView';
import {Clock} from './Clock';
import {MyButton} from './MyButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  divider: {
    height: 1,
    padding: 5,
    backgroundColor: 'whitesmoke',
  },
});

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
        <View style={styles.container}>
          <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData) => <Text>{rowData}</Text>}
          />

          <View style={styles.divider} />
          <Clock />

          <View style={styles.divider} />
          <MyButton />

          <View style={styles.divider} />
          <Text>Hey there. Just some plain old text.</Text>

          <View style={styles.divider} />
          <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
            <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
          </FadeInView>
        </View>
    );
  }
}

Expo.registerRootComponent(App);
