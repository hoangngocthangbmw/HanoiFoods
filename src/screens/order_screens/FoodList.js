import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import FoodsData from '../../data/FoodsData';
import FoodListItem from '../order_screens/FoodListItem';

export default class FoodList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={FoodsData}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => {
            return index.toString()
          }}
          renderItem={({ item, index }) => {
            return (
              <FoodListItem
                item={item}
                index={index}
              />
            )
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
