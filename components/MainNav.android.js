import {
  createDrawerNavigator
} from "react-navigation";
import GameScreen from './shared/GameScreen';
import InfoScreen from './shared/InfoScreen';
import AboutScreen from './shared/AboutScreen';


export default createDrawerNavigator({
  GameScreen: {
    screen: GameScreen,
    navigationOptions: () => ({
      title: "Game"
    }),
  },
  InfoScreen: {
    screen: InfoScreen,
    navigationOptions: () => ({
      title: "Info"
    }),
  },
  AboutScreen: {
    screen: AboutScreen,
    navigationOptions: () => ({
      title: "About"
    }),
  }
}, {
  initialRouteName: "GameScreen",
  backBehavior: "none"
});