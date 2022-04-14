import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  news: [],
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    initialiseNews: (state, action) => {},
    addNews: (state, action) => {},
    deleteNews: (state, action) => {},
    okNews: (state, action) => {},
  },
});

export const { initialiseNews, addNews, deleteNews, okNews } =
  newsSlice.actions;

export default newsSlice.reducer;
