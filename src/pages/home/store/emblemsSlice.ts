import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "./types";
import { httpClient } from "../../../shared/services/http-client/api";
import { RootState } from "../../../store/store";

export const getAllEmblems = createAsyncThunk("emblems/getAll", async () => {
  const response = await httpClient.doGet("emblems");
  if (response.success) {
    return response.data;
  }
});

const initialState: IInitialState = {
  emblems: [],
  loading: false,
};

export const emblemsSlice = createSlice({
  name: "emblems",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllEmblems.fulfilled, (state, action) => {
      state.emblems = action.payload;
    });
  },
});

export const selectEmblems = (state: RootState) => state.emblems;
export default emblemsSlice.reducer;
