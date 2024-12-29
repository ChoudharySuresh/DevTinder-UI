import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: {
    feedData: null,
  },
  reducers: {
    addFeed: (state, action) => {
      state.feedData = action.payload;
    },
    removeUserFromFeed: (state, action) => {
      state.feedData = state.feedData.filter(
        (user) => user._id !== action.payload
      );
    },
  },
});

export const { addFeed, removeUserFromFeed } = feedSlice.actions;
export default feedSlice.reducer;
