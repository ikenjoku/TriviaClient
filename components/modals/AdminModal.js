import React, { Component } from 'react';
import { connect } from "react-redux";
import { View, StyleSheet, Modal } from "react-native";

class AdminModal extends Component {
  constructor(inProps) {
    super(inProps);
  }
  render() {
    return (
      <Modal
        presentationStyle={"fullScreen"}
        visible={this.props.isVisible}
        animationType={"slide"}
        onRequestClose={() => { }}
      >
        <View style={styles.outerContainer}>
          <Text style={styles.headingText}>Admin</Text>
          <View style={styles.buttonContainer}>
            <Button title="New Game"
              onPress={() => {
                CoreCode.io.emit("adminNewGame", {});
              }}
            /> </View>
          <View style={styles.buttonContainer}>
            <Button title="Next Question"
              onPress={() => {
                CoreCode.io.emit("adminNextQuestion", {});
              }} />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="End Game"
              onPress={() => {
                CoreCode.io.emit("adminEndGame", {});
              }}
            /> </View>
          <View style={styles.currentStatusContainer}>
            <Text style={styles.currentStatusText}>
              Current Status: {this.props.currentStatus}
            </Text>
          </View>
        </View>
      </Modal>);
  }
}


const styles = StyleSheet.create({
  outerContainer: {
    flex: 1, margin: 50, justifyContent: "center",
    alignItems: "center"
  },
  headingText: { fontSize: 40, fontWeight: "bold", margin: 50 },
  buttonContainer: { margin: 50 },
  currentStatusContainer: { margin: 50 },
  currentStatusText: { fontSize: 20, fontWeight: "bold", color: "red" }
});

const mapStateToProps = (inState) => {
  return {
    isVisible: inState.modals.adminVisible,
    currentStatus: inState.modals.currentStatus
  };
};

export default connect(mapStateToProps)(AdminModal);