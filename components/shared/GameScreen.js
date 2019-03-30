import { createSwitchNavigator } from "react-navigation";
import GameHomeScreen from "./GameScreen-Home";
import GameLeaderboardScreen from "./GameScreen-Leaderboard";
import GameQuestionScreen from "./GameScreen-Question";

export default createSwitchNavigator({
  GameHomeScreen: {
    screen: GameHomeScreen
  },
  GameLeaderboardScreen: {
    screen: GameLeaderboardScreen
  },
  GameQuestionScreen: {
    screen: GameQuestionScreen
  }
}, {
  headerMode: "none",
  initialRouteName: "GameHomeScreen"
});