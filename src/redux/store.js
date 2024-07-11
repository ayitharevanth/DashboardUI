import { configureStore } from '@reduxjs/toolkit';
import dashboardReducers from '../redux/dashboard/dashboardSlice';
import userReducer from '../redux/user/userSlice';

const store = configureStore({
  reducer: {
    profileReport: dashboardReducers.profileReport,
    replies: dashboardReducers.replies,
    engagement: dashboardReducers.engagement,
    audienceRetention: dashboardReducers.audienceRetention,
    user: userReducer,
  }
});

export default store;
