import {
  createSwitchNavigator,
  createStackNavigator,
  createTabNavigator,
  createBottomTabNavigator
} from "react-navigation";

import LoginScreen from "../screens/login_screens/LoginScreen";
import SplashScreen from "../screens/splash_screens/SplashScreen";
import OrderScreen from "../screens/order_screens/OrderScreen";
import PersionalScreen from "../screens/persional_screens/PersionalScreen";
import ExchangeScreen from "../screens/exchange_screens/ExchangeScreen";
import RewardScreen from "../screens/reward_screens/RewardScreen";
import VoucherScreen from "../screens/voucher_screens/VoucherScreen";
import R from "../res/R";

const SplashStack = createStackNavigator(
  {
    Splash: { screen: SplashScreen }
  },
  {
    navigationOptions: () => ({
      header: null
    })
  }
);

const LoginStack = createStackNavigator(
  {
    Login: { screen: LoginScreen }
  },
  {
    navigationOptions: () => ({
      header: null
    })
  }
);

const TabStack = createBottomTabNavigator(
  {
    Order: { screen: OrderScreen },
    Voucher: { screen: VoucherScreen },
    Exchange: { screen: ExchangeScreen },
    Reward: { screen: RewardScreen },
    Persional: { screen: PersionalScreen }
  },
  {
    navigationOptions: () => ({
      header: null
    }),
    tabBarPosition: "bottom",
    tabBarOptions: {
      activeTintColor: R.colors.purple800,
      inactiveTintColor: R.colors.grey600
    }
  }
);

const AppStack = createSwitchNavigator({
  SplahStack: { screen: SplashScreen },
  LoginStack,
  TabStack
});

export default AppStack;
