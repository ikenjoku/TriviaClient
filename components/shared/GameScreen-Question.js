import React, { Component } from 'react'
import { View, Text as RNText } from 'react-native'
import { Text, Button } from "native-base";
import { connect } from 'react-redux';
import CoreCode from '../../redux/corecode';


class GameQuestionScreen extends Component {
  constructor(inProps) {
    super(inProps);
  }
  render() {
    return (
      <View style={styles.outerContainer}>
        <View style={styles.questionContainer}>
          <RNText style={styles.question}>{this.props.question}</RNText>
        </View>
        <View style={styles.answerButtonsContainer}>
          <Button full
            style={styles.answerButton}
            primary={this.props.answerButtonPrimary[0]}
            danger={this.props.answerButtonDanger[0]}
            onPress={() => { store.dispatch(answerButtonHighlight(0)) }}>
            <Text style={styles.buttonText}>
              {this.props.answerButtonLabels[0]}
            </Text>
          </Button>
          <View style={styles.submitButtonContainer}>
            <Button
              block
              success
              onPress={
                () => {
                  if (store.getState().question.selectedAnswer === -1) {
                    Alert.alert("D'oh!", "Please select an answer",
                      [{ text: "OK" }], { cancelable: false }
                    );
                  } else {
                    CoreCode.io.emit("submitAnswer", {
                      playerID: store.getState().playerInfo.id,
                      answer: store.getState().question.answerButtonLabels[
                        store.getState().question.selectedAnswer
                      ]
                    });
                  }
                }
              } >
              <Text style={styles.buttonText}>Submit Answer</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}


const mapStateToProps = (inState) => ({
  answerButtonPrimary: inState.question.answerButtonPrimary,
  answerButtonDanger: inState.question.answerButtonDanger,
  answerButtonLabels: inState.question.answerButtonLabels,
  question: inState.question.currentQuestion,
})

const mapDispatchToProps = {

}


const styles = StyleSheet.create({
  outerContainer: {
    flex: 1, alignItems: "stretch", justifyContent: "center",
    marginTop: 50, marginLeft: 20, marginRight: 20
  },
  questionContainer: { flex: .2, justifyContent: "center", alignSelf: "center" },
  answerButtonsContainer: { flex: .8, alignItems: "center", justifyContent: "center" },
  submitButtonContainer: { justifyContent: "center", height: 140 }, question: { fontWeight: "bold", fontSize: 26, color: "red", textAlign: "center" },
  answerButton: { marginTop: 20 },
  buttonText: { fontWeight: "bold", color: "white" }
});

export default connect(mapStateToProps, mapDispatchToProps)(GameQuestionScreen)
