import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import workerService from './workerService';

const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

//Register worker
export const registerWorker = createAsyncThunk('auth/registerWorker', async(workerData, thunkAPI) => {
      try {

          return await workerService.registerWorker(user, workerData)
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

export const workerSlice = createSlice({
    name: 'worker',
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
        .addCase(registerWorker.pending, (state) => {
            state.isLoading = true
        })
        .addCase(registerWorker.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(registerWorker.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        })
    }
})

export const { reset } = workerSlice.actions;
export default workerSlice.reducer;