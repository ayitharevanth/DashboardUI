import { createSlice } from '@reduxjs/toolkit';

export const profileReportSlice = createSlice({
  name: 'profileReport',
  initialState: {
    title: 'Profile Report',
    value: '12k',
    year: '2021',
    percentage: 68.2
  },
  reducers: {
    setProfileReport: (state, action) => {
      state.title = action.payload.title;
      state.value = action.payload.value;
      state.year = action.payload.year;
      state.percentage = action.payload.percentage;
    }
  }
});

export const repliesSlice = createSlice({
  name: 'replies',
  initialState: {
    title: 'Replies',
    value: '40',
    increment: '14',
    percentage: 74
  },
  reducers: {
    setReplies: (state, action) => {
      state.title = action.payload.title;
      state.value = action.payload.value;
      state.increment = action.payload.increment;
      state.percentage = action.payload.percentage;
    }
  }
});

export const engagementSlice = createSlice({
  name: 'engagement',
  initialState: {
    title: 'Engagement',
    value: '100',
    increment: '14',
    percentage: 74
  },
  reducers: {
    setEngagement: (state, action) => {
      state.title = action.payload.title;
      state.value = action.payload.value;
      state.increment = action.payload.increment;
      state.percentage = action.payload.percentage;
    }
  }
});

export const audienceRetentionSlice = createSlice({
  name: 'audienceRetention',
  initialState: {
    title: 'Audience retention',
    value: '330',
    increment: '14',
    percentage: 74
  },
  reducers: {
    setAudienceRetention: (state, action) => {
      state.title = action.payload.title;
      state.value = action.payload.value;
      state.increment = action.payload.increment;
      state.percentage = action.payload.percentage;
    }
  }
});

export const { setProfileReport } = profileReportSlice.actions;
export const { setReplies } = repliesSlice.actions;
export const { setEngagement } = engagementSlice.actions;
export const { setAudienceRetention } = audienceRetentionSlice.actions;

export default {
  profileReport: profileReportSlice.reducer,
  replies: repliesSlice.reducer,
  engagement: engagementSlice.reducer,
  audienceRetention: audienceRetentionSlice.reducer,
};
