import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class AboutScreen extends Component {
  constructor(inProps) {
    super(inProps);
  }
  render() {
    return (
      <View style={styles.outerContainer}>
        <View style={styles.spacer} />
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>RNTrivia (React Native Trivia)</Text> </View>
        <View style={styles.textContainer}>
          <Text style={styles.textVersion}>v1.0</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textSource}>Published in the Apress book</Text>
          <Text style={styles.textSource}>Practical React Native Projects</Text>
          <Text style={styles.textSource}>in 2018</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textAuthor}>By Frank W. Zammetti</Text>
        </View>
        <View style={styles.spacer} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  spacer: {
    flex: .2
  },
  textContainer: {
    flex: .15,
    justifyContent: "center",
    alignItems: "center"
  },
  textTitle: {
    fontWeight: "bold",
    fontSize: 20
  },
  textVersion: {
    fontWeight: "bold",
    fontSize: 18
  },
  textSource: {
    fontWeight: "bold",
    fontSize: 16
  },
  textAuthor: {
    fontWeight: "bold",
    fontSize: 14
  }
});