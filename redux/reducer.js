exports.modalsReducer = function (inState = {}, inAction) {
  switch (inAction.type) {
    case SET_CURRENT_STATUS:
      {
        const modalsNode = {
          ...inState
        };
        modalsNode.currentStatus = inAction.payload.currentStatus;
        return {
          ...inState,
          ...modalsNode
        };
      }
    case SET_END_GAME_MESSAGE:
      {
        const modalsNode = {
          ...inState
        };
        modalsNode.endGameMessage = inAction.payload.message;
        return {
          ...inState,
          ...modalsNode
        };
      }
    case SET_IS_ADMIN:
      {
        const modalsNode = {
          ...inState
        };
        modalsNode.isAdmin = inAction.payload.isAdmin;
        return {
          ...inState,
          ...modalsNode
        };
      }
    case SHOW_HIDE_MODAL:
      {
        const modalsNode = {
          ...inState
        };
        modalsNode[`${inAction.payload.modalName}Visible`] =
        inAction.payload.visible;
        return {
          ...inState,
          ...modalsNode
        };
      }
    default:
      {
        return inState;
      }
  }
};

exports.playerInfoReducer = function (inState = {}, inAction) {
  switch (inAction.type) {
    case SET_PLAYER_ID:
      {
        const playerInfoNode = {
          ...inState
        };
        playerInfoNode.id = inAction.payload.id;
        return {
          ...inState,
          ...playerInfoNode
        };
      }
    case SET_PLAYER_NAME:
      {
        const playerInfoNode = {
          ...inState
        };
        playerInfoNode.name = inAction.payload.name;
        return {
          ...inState,
          ...playerInfoNode
        };
      }
    default:
      {
        return inState;
      }
  }
};

exports.gameDataReducer = function (inState = {}, inAction) {
  switch (inAction.type) {
    case SET_GAME_DATA:
      {
        return {
          ...inState,
          ...inAction.payload.gameData
        };
      }
    default:
      {
        return inState;
      }
  }
};

exports.questionReducer = function (inState = {}, inAction) {
  switch (inAction.type) {
    case ANSWER_BUTTON_HIGHLIGHT:
      {
        const questionNode = {
          ...inState
        };
        questionNode.answerButtonPrimary = [true, true, true, true, true];
        questionNode.answerButtonDanger = [false, false, false, false, false];
        questionNode.selectedAnswer = inAction.payload.buttonNumber;
        if (inAction.payload.buttonNumber !== -1) {
          questionNode.answerButtonDanger[inAction.payload.buttonNumber] = true;
        }
        return {
          ...inState,
          ...questionNode
        };
      }
    case UPDATE_ANSWER_BUTTON_LABEL:
      {
        const questionNode = {
          ...inState
        };
        questionNode.answerButtonLabels[inAction.payload.buttonNumber] =
        inAction.payload.label;
        return {
          ...inState,
          ...questionNode
        };
      }
    case RESET_ALL_BUTTONS:
      {
        const questionNode = {
          ...inState
        };
        questionNode.answerButtonPrimary = [true, true, true, true, true];
        questionNode.answerButtonDanger = [false, false, false, false, false];
        return {
          ...inState,
          ...questionNode
        };
      }
    case SET_QUESTION:
      {
        const questionNode = {
          ...inState
        };
        questionNode.currentQuestion = inAction.payload.question;
        return {
          ...inState,
          ...questionNode
        };
      }
    default:
      {
        return inState;
      }
  }
};

exports.leaderboardReducer = function (inState = {}, inAction) {
  switch (inAction.type) {
    case UPDATE_LEADERBOARD:
      {
        return {
          ...inState,
          ...inAction.payload.listData
        };
      }
    default:
      {
        return inState;
      }
  }
};