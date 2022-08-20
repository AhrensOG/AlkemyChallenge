import { CREATE_OPERATION } from "../actions/actions";

const initialState = {
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_OPERATION:
      return {
        ...state,
      }
    default:
      return state;
  }
};

export default rootReducer;