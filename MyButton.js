'use strict';

import React, { Component } from 'react';
import {Text, TouchableHighlight} from 'react-native';

const TAP_ME = 'Tap me!';
const IM_TAPPED = 'I\'ve been tapped!';

var buttonThis;
export class MyButton extends Component {
  constructor(props) {
    super(props);
    this.state = {isTapped: false,
      tap_count: 0};
    buttonThis = this;
  }


  _onPressButton() {
    console.log("You tapped the button!");
    let c = buttonThis.state.tap_count + 1;
    buttonThis.setState({
      isTapped: true,
      tap_count: c
    });
  }

  render() {
    let button_text = null;
    if (buttonThis.state.isTapped) {
      // template string:
      button_text = `${IM_TAPPED}  tap count = ${buttonThis.state.tap_count}`
    } else {
      button_text = TAP_ME;
    }
    return (
        <TouchableHighlight onPress={this._onPressButton}>
          <Text>{button_text}</Text>
        </TouchableHighlight>
    );
  }
}

