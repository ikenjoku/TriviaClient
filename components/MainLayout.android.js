import React, { Component } from 'react';
import { View, StyleSheet } from "react-native";
import NamePromptModal from './modals/NamePromptModal';
import EndGameModal from './modals/EndGameModal';
import AdminModal from './modals/AdminModal';
import Drawer from './MainNav.android';

export default class MainLayout extends React.Component {
  constructor(inProps) {
    super(inProps);
}
  render() {
    return (
      <View style={styles.outerContainer}>
        <NamePromptModal />
        <EndGameModal />
        <AdminModal />
        <Drawer />
      </View>
); }
}

const styles = StyleSheet.create({
  outerContainer : { flex : 1 }
});