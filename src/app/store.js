import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/searchSlice';
import detailsReducer from '../features/detailsSlice';
import savedReducer from "../features/savedSlice"

const store = configureStore({
  reducer: {
    search: searchReducer,
    details :detailsReducer,
    saved :savedReducer
  },
});

export default store;