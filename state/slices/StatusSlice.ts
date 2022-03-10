import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum RefreshStatus {
  Idle,
  Trigger,
  Loading,
}

export interface StatusState {
  refresh: RefreshStatus;
}

const initialState: StatusState = {
  refresh: RefreshStatus.Trigger,
};

export const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    setRefresh: (state, action: PayloadAction<RefreshStatus>) => {
      state.refresh = action.payload;
    },
  },
});

export const { setRefresh } = statusSlice.actions;

export default statusSlice.reducer;
