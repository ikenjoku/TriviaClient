import React, { Component } from 'react';
import { View, StyleSheet, Modal } from "react-native";
import { connect } from 'react-redux'

class EndGameModal extends Component {
  constructor(inProps) {
    super(inProps);
  }
  render() {
    return (
      <Modal
        presentationStyle={"formSheet"}
        visible={this.props.isVisible}
        animationType={"slide"}
        onRequestClose={() => { }}
      >
        <View style={styles.outerContainer}>
          <View style={styles.headingContainer}>
            <Text style={styles.headingText}>Game over</Text>
          </View>
          <View style={styles.messageContainer}>>
          <Text>{this.props.message}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button block onPress={() => { }}>
              <Text style={styles.buttonText}>Ok</Text>
            </Button>
          </View>
        </View>
      </Modal>);
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 20
  },
  headingContainer: {
    height: 100,
    justifyContent: "center"
  },
  headingText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  messageContainer: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    height: 80,
    alignSelf: "stretch",
    justifyContent: "center"
  },
  buttonText: {
    fontWeight: "bold",
    color: "white"
  }
});

const mapStateToProps = (inState) => {
  return {
    isVisible: inState.modals.namePromptVisible,
    endGameVisible: inState.modals.endGameMessage
  };
};

export default connect(mapStateToProps)(EndGameModal);