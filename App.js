/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import AppStack from './src/navigation/router';
export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <AppStack />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
