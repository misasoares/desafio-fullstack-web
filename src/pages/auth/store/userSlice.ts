import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../store/store";
import { httpClient } from "../../../shared/services/http-client/api";
import { IEmblems } from "../../home/store/types";

interface IUser {
  id: string;
  name: string;
  email: string;
  emblems: IEmblems[];
}

export const getRandomEmblemToUser = createAsyncThunk(
  "emblems/getRandomEmblem",
  async (userId: string) => {
    const response = await httpClient.doGet(`users/getRandomEmblem/${userId}`);
    if (response.success) {
      return response.data;
    }
  }
);

const initialState: IUser = {
  name: "",
  email: "",
  id: "",
  emblems: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.emblems = action.payload.emblems;
    },
    logout(state) {
      state.id = "";
      state.name = "";
      state.email = "";
    },
  },
  extraReducers: (builder) =>
    builder.addCase(getRandomEmblemToUser.fulfilled, (state, action) => {
      state.emblems = action.payload.emblems;
    }),
});

export const { setUser, logout } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
