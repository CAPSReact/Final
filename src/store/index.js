import { configureStore } from '@reduxjs/toolkit';
import breadSlice from '../items/breadSlice';

// 스토어 설정
export const store = configureStore({
  reducer: {
    bread: breadSlice,
  },
});
