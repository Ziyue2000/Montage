let userId = {
  uid: "",
  isLogin: false
}

const userIdReducer = (state=userId, action) => {
  switch(action.type) {
    case "getUserId" :
      return {
        uid: action.payload,
        isLogin: true
      };
    default:
        return state;
    }
}

export default userIdReducer;
