import React, { Component } from 'react'
import { View, Text, WebView } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'



const awaitingQuestionSpinStyles = `
.spinText {
  animation-name : spin, depth;
  animation-timing-function : linear;
  animation-iteration-count : infinite;
  animation-duration : 3s;
  text-align : center;
  font-weight : bold;
  color : red;
  font-size : 24pt;
  padding-top : 100px;
}
@keyframes spin {
  from { transform : rotateY(0deg); }
  to { transform : rotateY(-360deg); }
}
@keyframes depth {
  0 { text-shadow : 0 0 black; }
  25% { text-shadow : 1px 0 black, 2px 0 black, 3px 0 black, 4px 0 black,
  5px 0 black; }
  50% { text-shadow : 0 0 black; }
  75% { text-shadow : -1px 0 black, -2px 0 black, -3px 0 black, -4px 0
  black, -5px 0 black; }
  100% { text-shadow : 0 0 black; }
} `;

const awaitingQuestionHTML = `
<style>${awaitingQuestionSpinStyles}</style>
<div class="spinText">Awaiting Question</div>
`;

class GameLeaderboardScreen extends Component {
  constructor(inProps) {
    super(inProps);
  }
  render() {
    return (
      <View style={styles.outerContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Current Leaderboard</Text>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={this.props.listData}
            keyExtractor={(inItem) => inItem.playerID}
            renderItem={({ item }) => {
              return (
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <View style={{ flex: .6 }}>
                    <Text style={{ fontSize: 20 }}>
                      {item.playerName} {store.getState().playerInfo.id === item.playerID ? "(YOU)" : ""}
                    </Text>
                  </View>
                  <View style={{ flex: .4 }}>
                    <Text style={{ fontSize: 20 }}>{item.points} points</Text>
                  </View>
                </View>
              );
              }}
            />
        </View>
        <View style={styles.awaitingQuestionContainer}>
          <WebView
            style={styles.awaitingQuestionWebView}
            source={{ html: awaitingQuestionHTML }}
          />
        </View>
      </View>
      );
  }
}


const mapStateToProps = (inState) => ({
  listData: inState.leaderboard.listData,

})

const mapDispatchToProps = {

}


const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    marginTop: 50
  },
  headingContainer: {
    height: 150,
    justifyContent: "center",
    alignSelf: "center"
  },
  headingText: {
    fontSize: 34,
    fontWeight: "bold"
  },
  listContainer: {
    flex: .6,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 40,
    borderColor: "silver",
    borderWidth: 2,
    padding: 10
  },
  awaitingQuestionContainer: {
    flex: .4
  },
  awaitingQuestionWebView: {
    backgroundColor: "transparent"
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GameLeaderboardScreen)
