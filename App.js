import React, { Component } from 'react';
import { Root } from "native-base";

import store from "./redux/store";
import MainLayout from './components/MainLayout';
export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <Root>
          <MainLayout />
        </Root>
      </Provider>);
  }
  componentDidMount() {
    store.dispatch(showHideModal("namePrompt", true));
  };
}