import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  workerInfo: null,
}

//Register worker
export const registerWorker = createAsyncThunk('auth/registerWorker', async(workerData, thunkAPI) => {
  try {
      //const token = thunkAPI.getState().auth.user.token
      console.log('pre-register')
      //return await workerService.registerWorker(workerData)
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
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    },
  },
  extraReducers: (builder) => {
      builder
      //registerWorker
      .addCase(registerWorker.pending, (state) => {
          state.isLoading = true
      })
      .addCase(registerWorker.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.workerInfo = action.payload
      })
      .addCase(registerWorker.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
      })
      
      //getWorkerInfo
      .addCase(getWorkerInfo.pending, (state) => {
          state.isLoading = true
      })
      .addCase(getWorkerInfo.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.workerInfo = action.payload
      })
      .addCase(getWorkerInfo.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
      })

  }
});

export const { reset } = workerSlice.actions;
export default workerSlice.reducer;