import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import R from '../../res/R';
import FoodList from './FoodList';

export default class ContainerHorizontal extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewTop}>
          <Text>{R.strings.order.text_title_1}</Text>
          <TouchableOpacity>
            <Text>{R.strings.order.text_title_2}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 6 }}>
          <FoodList />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    marginTop: 8,
    backgroundColor: 'white'
  },

  viewTop: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  }
})