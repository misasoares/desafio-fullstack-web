import { combineReducers } from "redux";
import messageSlice from "../../shared/utils/custom-message/slice";
import emblemsSlice from "../../pages/home/store/emblemsSlice";

const rootReducer = combineReducers({
  message: messageSlice,
  emblems: emblemsSlice,
});

export default rootReducer;
