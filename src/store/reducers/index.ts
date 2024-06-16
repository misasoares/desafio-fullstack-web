import { combineReducers } from "redux";
import messageSlice from "../../shared/utils/custom-message/slice";

const rootReducer = combineReducers({
  message: messageSlice,
});

export default rootReducer;
