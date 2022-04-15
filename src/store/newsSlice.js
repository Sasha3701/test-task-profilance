import { createSlice } from "@reduxjs/toolkit";
import api from "../api";

const initialState = {
  news: [],
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    initialiseNews: (state, action) => {
      state.news = action.payload;
    },
    addNews: (state, action) => {},
    deleteNews: (state, action) => {},
    okNews: (state, action) => {},
  },
});

export const { initialiseNews, addNews, deleteNews, okNews } =
  newsSlice.actions;

export const initialiseFunc = (callback) => async (dispatch) => {
  try {
    const news = await api.getNews();
    dispatch(initialiseNews(news));
    callback();
  } catch (e) {
    // Обработка ошибок
  }
};

export default newsSlice.reducer;
