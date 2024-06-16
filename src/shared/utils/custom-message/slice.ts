import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ReactElement } from "react";
import { RootState } from "../../../store/store";

type initialStateProps = {
  state: boolean;
  options: {
    variant: "success" | "error" | "warning" | "info";
    anchorOrigin: {
      vertical: "top" | "bottom";
      horizontal: "left" | "center" | "right";
    };
    autoHideDuration: number | null;
    message: ReactElement | string;
  };
};

const initialState: initialStateProps = {
  state: false,
  options: {
    variant: "info",
    anchorOrigin: {
      vertical: "top",
      horizontal: "center",
    },
    autoHideDuration: 2000,
    message: "Hi",
  },
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    showMessage(
      state,
      action: PayloadAction<Partial<initialStateProps["options"]>>
    ) {
      state.state = true;
      state.options = {
        ...state.options,
        ...action.payload,
      };
    },
    hideMessage(state) {
      state.state = false;
    },
  },
  selectors: {
    selectMessageState: (message) => message.state,
    selectMessageOptions: (message) => message.options,
  },
});

export const selectMessageState = (state: RootState) => state.message.state;
export const selectMessageOptions = (state: RootState) => state.message.options;

export const { hideMessage, showMessage } = messageSlice.actions;
export default messageSlice.reducer;
