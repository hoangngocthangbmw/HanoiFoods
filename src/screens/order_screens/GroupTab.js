import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity
} from "react-native";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";

import HighlightTab from "../order_screens/HighlightTab";
import NearTab from "../order_screens/NearTab";
import GoodPrice from "../order_screens/GoodPriceTab";
import R from "../../res/R";

export default class GroupTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: "highlight", title: R.strings.order.text_highlight_tab },
        { key: "near", title: R.strings.order.text_near_tab },
        { key: "goodprice", title: R.strings.order.text_good_price }
      ]
    };
  }

  _handleIndexChange = index => this.setState({ index });

  _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const color = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map(inputIndex =>
              inputIndex === i ? "#D6356C" : "#222"
            )
          });
          return (
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => this.setState({ index: i })}
            >
              <Animated.Text style={{ color }}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  _renderScene = SceneMap({
    highlight: HighlightTab,
    near: NearTab,
    goodprice: GoodPrice
  });

  render() {
    return (
      <View style={styles.container}>
        <TabView
          navigationState={this.state}
          renderScene={this._renderScene}
          renderTabBar={this._renderTabBar}
          onIndexChange={this._handleIndexChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height - Dimensions.get("window").height * 0.115,
    marginTop: 8
  },

  scene: {
    flex: 1
  },

  tabBar: {
    height: 40,
    flexDirection: "row",
    backgroundColor: "white"
  },

  tabItem: {
    flex: 1,
    alignItems: "center",
    padding: 16
  }
});
