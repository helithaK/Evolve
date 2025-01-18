import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from '../Features/navigation/navigationSlice';
// import userReducer from '../features/user/userSlice';

const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    // user: userReducer,
  },
});

export default store;
