import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export default class GameHomeScreen extends React.Component {
  constructor(inProps) {
    super(inProps);
    CoreCode.mainNavigator = inProps.navigation;
  }
  render() {
    return (
      <View style={styles.outerContainer}>
        <View><Text>Game Home Screen</Text></View>
        <Image source={require("../../assets/icon.png")} />
      </View>);
  }
}


const styles = StyleSheet.create({
  outerContainer: {
    flex: 1, alignItems: "center",
    justifyContent: "center"
  }
});

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(GameHomeScreen)
