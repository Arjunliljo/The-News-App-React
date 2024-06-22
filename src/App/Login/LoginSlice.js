import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  isLoginPage: false,
  isSignInPage: false,
  isArticlePage: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
    setIsLogginPage(state, action) {
      state.isLoginPage = action.payload;
    },
    setIsSignInPage(state, action) {
      state.isSignInPage = action.payload;
    },
    setIsArticlePage(state, action) {
      state.isSignInPage = action.payload;
    },
  },
});

export const {
  setIsLoggedIn,
  setIsLogginPage,
  setIsSignInPage,
  setIsArticlePage,
} = loginSlice.actions;
export default loginSlice.reducer;
