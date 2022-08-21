import { CREATE_OPERATION, CURRENT_BALANCE, DELETE_OPERATION, GET_OPERATIONS, GET_TEN_REGISTERED_OPERATIONS, SAVE_TYPE_OPERATION, UPDATE_OPERATION } from "../actions/actions";

const initialState = {
  typeOperation: '',
  currentBalance: 0, 
  operations: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_OPERATION:
      return {
        ...state,
        responseApi: action.payload
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
    case DELETE_OPERATION:
      return {
        ...state,
        responseApi: action.payload
      }
    case UPDATE_OPERATION:
      return {
        ...state,
      }
    case SAVE_TYPE_OPERATION:
      return {
        ...state,
        typeOperation: action.payload
      }
    default:
      return state;
  }
};

export default rootReducer;