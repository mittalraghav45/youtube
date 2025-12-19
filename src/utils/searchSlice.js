import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      return { ...state, ...action.payload }; //option 1
      //   Object.assign(state, action.payload); //option 2
    },
  },
});

export default searchSlice.reducer;
export const { cacheResults } = searchSlice.actions;
