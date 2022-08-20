import { CREATE_OPERATION, CURRENT_BALANCE, GET_OPERATIONS, GET_TEN_REGISTERED_OPERATIONS } from "../actions/actions";

const initialState = {
  currentBalance: 0, 
  operations: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_OPERATION:
      return {
        ...state,
      }
    case CURRENT_BALANCE:
      return {
        ...state,
        currentBalance: action.payload
      }
    case GET_TEN_REGISTERED_OPERATIONS:
      return {
        ...state,
        operations: action.payload
      }
    case GET_OPERATIONS:
      return {
        ...state,
        operations: action.payload
      }
    default:
      return state;
  }
};

export default rootReducer;