import Expo from 'expo';
import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, Image, View } from 'react-native';

class App extends React.Component {

    render() {
      return (
          <ScrollView>
            <Text style={{fontSize:96}}>Scroll me plz</Text>
            <Image source={require('./assets/icons/app.png')} />
            <Image source={require('./assets/icons/app.png')} />
            <Image source={require('./assets/icons/app.png')} />
            <Image source={require('./assets/icons/app.png')} />
            <Image source={require('./assets/icons/app.png')} />
            <Text style={{fontSize:96}}>If you like</Text>
            <Image source={require('./assets/icons/app.png')} />
            <Image source={require('./assets/icons/app.png')} />
            <Image source={require('./assets/icons/app.png')} />
            <Image source={require('./assets/icons/app.png')} />
            <Image source={require('./assets/icons/app.png')} />
            <Text style={{fontSize:96}}>Scrolling down</Text>
            <Image source={require('./assets/icons/app.png')} />
            <Image source={require('./assets/icons/app.png')} />
            <Image source={require('./assets/icons/app.png')} />
            <Image source={require('./assets/icons/app.png')} />
            <Image source={require('./assets/icons/app.png')} />
            <Text style={{fontSize:96}}>What's the best</Text>
            <Image source={require('./assets/icons/app.png')} />
            <Image source={require('./assets/icons/app.png')} />
            <Image source={require('./assets/icons/app.png')} />
            <Image source={require('./assets/icons/app.png')} />
            <Image source={require('./assets/icons/app.png')} />
            <Text style={{fontSize:96}}>Framework around?</Text>
            <Image source={require('./assets/icons/app.png')} />
            <Image source={require('./assets/icons/app.png')} />
            <Image source={require('./assets/icons/app.png')} />
            <Image source={require('./assets/icons/app.png')} />
            <Image source={require('./assets/icons/app.png')} />
            <Text style={{fontSize:80}}>React Native</Text>
          </ScrollView>
      );
    }
}


Expo.registerRootComponent(App);
