import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null
};
/**
 * this function recieves the state from the object INITIAL_STATE
 * if action.type is 'SET_CURRENT_USER' it returns a spread state and sets currentUser
 * if action.type is not 'SET_CURRENT_USER' it returns the default state
 *  */
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state
  }
};

export default userReducer;