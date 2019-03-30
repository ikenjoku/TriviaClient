import {
  createBottomTabNavigator
} from "react-navigation";
import GameScreen from './shared/GameScreen';
import InfoScreen from './shared/InfoScreen';
import AboutScreen from './shared/AboutScreen';

export default createBottomTabNavigator(
  {
    GameScreen: {
      screen: GameScreen,
      navigationOptions: {
        tabBarLabel: "Game",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("../images/icon-game.png")}
            style={[styles.tabIcons, { tintColor: tintColor }]}
          />)
      }
    },
    InfoScreen: {
      screen: InfoScreen,
      navigationOptions: {
        tabBarLabel: "Info",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("../images/icon-info.png")}
            style={[styles.tabIcons, { tintColor: tintColor }]}
          />)
      }
    },
    AboutScreen: {
      screen: AboutScreen,
      navigationOptions: {
        tabBarLabel: "About",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("../images/icon-about.png")}
            style={[styles.tabIcons, { tintColor: tintColor }]}
          />)
      }
    }
  }, {
    initialRouteName: "GameScreen",
    animationEnabled: true,
    swipeEnabled: true,
    backBehavior: "none",
    lazy: false,
    tabBarPosition: "bottom",
    tabBarOptions: {
      activeTintColor: "#ff0000",
      showIcon: true
    }
  });
