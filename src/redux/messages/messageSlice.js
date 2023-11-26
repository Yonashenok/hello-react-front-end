import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../api/axios';

const MESSAGE_API_URL = '/messages';

export const fetchMessage = createAsyncThunk(
  'message/fetchMessage',
  async () => {
    const res = await axios.get(MESSAGE_API_URL);
    return res.data;
  },
);

const initialState = {
  greeting: {},
  isLoading: false,
  error: '',
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMessage.fulfilled, (state, action) => {
        state.greeting = action.payload;
      })
      .addCase(fetchMessage.rejected, (state) => {
        state.error = 'oops! something went wrong';
      });
  },
});

export default messageSlice.reducer;
