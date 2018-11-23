import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import R from "../../res/R";

export default class FoodListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{ height: "100%", width: 250, marginLeft: 8 }}>
          <Image style={styles.image} source={this.props.item.image} />
          <Text style={styles.textTitle}>{this.props.item.title}</Text>
          <Text style={styles.textPrice}>{this.props.item.price}</Text>
          <Text style={styles.textDiscount}>Giảm giá 25%</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column"
  },

  image: {
    width: 250,
    height: 120,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "white"
  },

  textTitle: {
    fontSize: 12,
    marginLeft: 4
  },

  textPrice: {
    fontSize: 12,
    marginLeft: 4,
    color: "green",
    fontWeight: "200"
  },

  textDiscount: {
    fontSize: 12,
    marginLeft: 4,
    color: R.colors.purpleA400,
    marginBottom: 4
  }
});
