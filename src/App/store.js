import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "./Login/LoginSlice";
import dataReducer from "./Login/dataSlice";

export default configureStore({
  reducer: {
    loginEvent: loginReducer,
    dataSet: dataReducer,
  },
});
