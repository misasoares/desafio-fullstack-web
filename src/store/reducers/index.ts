import { combineReducers } from "redux";
import messageSlice from "../../shared/utils/custom-message/slice";
import emblemsSlice from "../../pages/home/store/emblemsSlice";
import userSlice from "../../pages/auth/store/userSlice";

const rootReducer = combineReducers({
  message: messageSlice,
  emblems: emblemsSlice,
  user: userSlice,
});

export default rootReducer;
