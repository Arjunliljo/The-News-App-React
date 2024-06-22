import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "./Login/LoginSlice";

export default configureStore({
  reducer: {
    loginEvent: loginReducer,
  },
});
