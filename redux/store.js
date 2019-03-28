import { createStore } from "redux";
import initialState from './initialState';
import {
  leaderboardReducer,
  playerInfoReducer,
  gameDataReducer,
  questionReducer,
  modalsReducer,
 } from "./reducer";


const rootReducer = combineReducers({
  leaderboard : leaderboardReducer,
  question : questionReducer,
  modals : modalsReducer,
  playerInfo : playerInfoReducer,
  gameData : gameDataReducer
});


export default createStore(rootReducer, initialState);