import { configureStore } from '@reduxjs/toolkit';
import albumReducer from './albumslice';

export default configureStore({
  reducer: {
    album: albumReducer
  },
})