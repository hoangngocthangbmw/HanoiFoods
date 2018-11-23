import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { getVouchers } from "../../api/voucher";
import R from "../../res/R";
export default class VoucherScreen extends Component {
  static navigationOptions = {
    title: R.strings.tabBottomBar.text_title_tab_voucher,
    tabBarIcon: ({ tintColor }) => (
      <Image
        tintColor={tintColor}
        source={require("../../asset/image/voucher.png")}
      />
    )
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    await getVouchers().then(res => {
      console.log("vorcher", res);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> VoucherScreen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
