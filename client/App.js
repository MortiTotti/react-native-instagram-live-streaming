import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Camera from "react-native-camera";
export default class App extends Component {
  render() {
    return (
      <Camera style={{ flex: 1 }}
        ref={cam => this.camera = cam}
        aspect={Camera.constants.Aspect.fill}>

      </Camera>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
