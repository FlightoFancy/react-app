let send_message = "SEND-MESSAGE";
let initialState = {
  dialogsData: [
    { name: "Dimych", id: "1" },
    { name: "Valera", id: "2" },
    { name: "Sveta", id: "3" },
    { name: "Andrey", id: "4" },
    { name: "Viktor", id: "5" },
    { name: "Sasha", id: "6" },
  ],

  messagesData: [
    { message: "Даровки", id: "1" },
    { message: "Хой", id: "2" },
    { message: "Йоу", id: "3" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case send_message:
      let body = action.newMessageBody;
      return {
        ...state,
        messagesData: [...state.messagesData, { message: body, id: "4" }],
      };
    default:
      return state;
  }
};
export const sendMessageCreator = (newMessageBody) => {
  return {
    type: send_message,
    newMessageBody,
  };
};

export default dialogsReducer;
