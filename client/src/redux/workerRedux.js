import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  workerInfo: null,
}

//Get worker info
export const getWorkerInfo = createAsyncThunk('auth/getAccount', async (_, thunkAPI) => {
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
  initialState,
  reducers: {
    registerWorkerStart: (state) => {
        state.isLoading = true;
    },
    registerWorkerSuccess: (state, action) => {
        state.isLoading = false;
        state.isSuccess = true
        state.workerInfo = action.payload;
    },
    registerWorkerFailure: (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload
    },
  }
});

export const {
    registerWorkerStart,
    registerWorkerSuccess,
    registerWorkerFailure,

} = workerSlice.actions;
export default workerSlice.reducer;