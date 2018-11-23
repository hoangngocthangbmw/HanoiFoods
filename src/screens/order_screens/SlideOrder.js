import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class SlideOrder extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> SlideOder </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: "blue",
    marginTop: 8,
  }

})