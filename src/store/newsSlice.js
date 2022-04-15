import { createSlice } from "@reduxjs/toolkit";
import { cloneDeep } from "lodash";
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
    addNews: (state, action) => {
      const cloneNews = cloneDeep(state.news);
      cloneNews.push(action.payload);
      state.news = cloneNews;
    },
    deleteNews: (state, action) => {
      const cloneNews = cloneDeep(state.news);
      state.news = cloneNews.filter((item) => item.id !== action.payload);
    },
    okNews: (state, action) => {
      const cloneNews = cloneDeep(state.news);
      state.news = cloneNews.map((item) => {
        if (item.id === action.payload) {
          return { ...item, status: "ok" };
        }
        return item;
      });
    },
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

export const deleteFunc = (id) => async (dispatch) => {
  try {
    // Какой-либо запрос

    dispatch(deleteNews(id));
  } catch (e) {
    // Обработка ошибок
  }
};

export const addFunc = (news) => async (dispatch) => {
  try {
    // Какой-либо запрос

    const currentDate = new Date().toString();
    dispatch(addNews({ ...news, date: currentDate }));
  } catch (e) {
    // Обработка ошибок
  }
};

export const okFunc = (id) => async (dispatch) => {
  try {
    // Какой-либо запрос

    dispatch(okNews(id));
  } catch (e) {
    // Обработка ошибок
  }
};

export default newsSlice.reducer;
