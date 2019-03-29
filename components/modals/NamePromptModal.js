import React, { Component } from 'react';
import { connect } from "react-redux";
import { View, StyleSheet, Modal, Switch } from "react-native";
import { Item, Label } from "native-base";

class NamePromptModal extends Component {
  constructor(inProps) {
    super(inProps);
  }
  render() {
    return (
      <Modal
        presentationStyle={"formSheet"}
        visible={this.props.isVisible}
        animationType={"slide"}
        onRequestClose={() => { }}>
        <View style={styles.outerContainer}>
          <View style={styles.headingContainer}>
            <Text style={styles.headingText}>Hello, new player!</Text>
          </View>
          <View style={styles.inputFieldContainer}>
            <Item floatingLabel>
              <Label>Please enter your name</Label>
              <Input
                onChangeText={
                  (inText) => store.dispatch(setPlayerName(inText))
                } />
            </Item>
            <View style={styles.switchContainer}>
              <View>
                <Switch
                  value={this.props.isAdmin}
                  onValueChange={
                    (inValue) => store.dispatch(setIsAdmin(inValue))
                  }
                /> </View>
              <View style={{ paddingLeft: 10 }}>
                <Text>I am the admin</Text>
              </View>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button block onPress={CoreCode.startup}><Text>Ok</Text></Button> </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  outerContainer: { flex: 1, alignItems: "center", justifyContent: "center", margin: 20 },
  headingContainer: { height: 100, justifyContent: "center" }, headingText: { fontSize: 20, fontWeight: "bold" },
  inputFieldContainer: { flex: 1, alignSelf: "stretch", justifyContent: "center" },
  switchContainer: { marginTop: 40, justifyContent: "center", flexDirection: "row" },
  buttonContainer: { height: 80, alignSelf: "stretch", justifyContent: "center" }
});

const mapStateToProps = (inState) => {
  return {
    isVisible : inState.modals.namePromptVisible,
    isAdmin : inState.modals.isAdmin
  };
};

export default connect(mapStateToProps)(NamePromptModal);