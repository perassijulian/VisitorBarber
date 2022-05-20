import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  
}

//Get worker info
export const getWorker = createAsyncThunk('auth/getAccount', async (_, thunkAPI) => {
try {
    const token = thunkAPI.getState().auth.user.token
    //return await workerService.getWorkerInfo(token)
} catch (error) {
  const message = 
      (error.response && 
          error.response.date && 
          error.response.data.message) || 
      error.message || 
      error.toString()
  return thunkAPI.rejectWithValue(message);
}
})

const workerSlice = createSlice({
  name: "worker",
  initialState: {
    workerInfo: null,
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
    getWorkersStart: (state, action) => {
        state.isFetching = true;
    },
    getWorkersSuccess: (state, action) => {
        state.isFetching = false;
        state.workerInfo = action.payload;
    },
    getWorkersFailure: (state, action) => {
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

} = workerSlice.actions;
export default workerSlice.reducer;