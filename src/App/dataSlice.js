import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  articles: [],
  authors: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    updateData: {
      prepare(articles, authors) {
        const updatedArticles = articles.map((article, i) => {
          const author = authors.find(
            (author) => author.author === article.author
          );
          const authorImg = author ? author.authorImg : null;
          return {
            ...article,
            id: i,
            authorImg,
          };
        });

        return { payload: { updatedArticles, articles, authors } };
      },
      reducer(state, action) {
        state.authors = action.payload.authors;
        state.articles = action.payload.articles;
        state.data = [...action.payload.updatedArticles];
      },
    },

    addData(state, action) {
      state.data = [
        { ...action.payload, id: state.data.length },
        ...state.data,
      ];
      state.authors = [
        ...state.authors,
        { author: action.payload.author, authorImg: action.payload.authorImg },
      ];
      state.articles = [action.payload, ...state.articles];
    },
  },
});

export const { updateData, addData } = dataSlice.actions;

export default dataSlice.reducer;
