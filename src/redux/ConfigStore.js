import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './SearchData';


const store = configureStore({
  reducer: {
    data: dataSlice,
  },
});

export default store;