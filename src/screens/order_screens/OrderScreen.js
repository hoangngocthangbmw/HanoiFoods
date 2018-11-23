import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

import R from "../../res/R";
import Header from "../../components/Header";
import ListFoodHorizontal from "./ContainerHorizontal";
import SlideOder from "./SlideOrder";
import GroupTab from "./GroupTab";
import HighlightTab from "./HighlightTab";

export default class OrderScreen extends Component {
  static navigationOptions = {
    title: R.strings.tabBottomBar.text_title_tab_order,
    tabBarIcon: ({ tintColor }) => (
      <Image
        tintColor={tintColor}
        source={require("../../asset/image/order.png")}
      />
    )
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  // _onClick = () => {
  // this.props.navigation.navigate('Test2');
  // }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          <Header />
          <SlideOder />
          <ListFoodHorizontal />
          <GroupTab />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: R.colors.grey200
  }
});
