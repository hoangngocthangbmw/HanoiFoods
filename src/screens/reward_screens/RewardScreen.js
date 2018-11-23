import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import R from "../../res/R";

export default class RewardScreen extends Component {
  static navigationOptions = {
    title: R.strings.tabBottomBar.text_title_tab_reward,
    tabBarIcon: ({ tintColor }) => (
      <Image
        tintColor={tintColor}
        source={require("../../asset/image/reward.png")}
      />
    )
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> RewardScreen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
