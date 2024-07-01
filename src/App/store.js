import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "./LoginSlice";
import dataReducer from "./dataSlice";

export default configureStore({
  reducer: {
    loginEvent: loginReducer,
    dataSet: dataReducer,
  },
});
