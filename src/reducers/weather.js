import { FETCH_WEATHER } from "../actions/index";

const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return !action.payload.data ? state : [action.payload.data, ...state];
    default:
      return state;
  }
};

export default reducer;
