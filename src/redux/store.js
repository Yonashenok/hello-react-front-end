import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './messages/messageSlice';

const store = configureStore({
  reducer: {
    message: messageReducer,
  },
});

export default store;
