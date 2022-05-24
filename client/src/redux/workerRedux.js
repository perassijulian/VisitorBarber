import { createSlice } from "@reduxjs/toolkit";

const workerSlice = createSlice({
  name: "worker",
  initialState: {
    workerInfo: null,
    workersInfo: null,
    error: false,
    isFetching: false,
  },
  reducers: {
    registerWorkerStart: (state) => {
        state.isFetching = true;
    },
    registerWorkerSuccess: (state, action) => {
        state.isFetching = false;
        state.workerInfo = action.payload;
    },
    registerWorkerFailure: (state, action) => {
        state.isFetching = false;
        state.error = true;
    },
    getWorkerStart: (state, action) => {
        state.isFetching = true;
    },
    getWorkerSuccess: (state, action) => {
        state.isFetching = false;
        state.workerInfo = action.payload;
    },
    getWorkerFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
    },
    getWorkersStart: (state) => {
        state.isFetching = true;
    },
    getWorkersSuccess: (state, action) => {
        state.isFetching = false;
        state.workersInfo = action.payload;
    },
    getWorkersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  }
});

export const {
    registerWorkerStart,
    registerWorkerSuccess,
    registerWorkerFailure,
    getWorkerStart,
    getWorkerSuccess,
    getWorkerFailure,
    getWorkersStart,
    getWorkersSuccess,
    getWorkersFailure,

} = workerSlice.actions;
export default workerSlice.reducer;