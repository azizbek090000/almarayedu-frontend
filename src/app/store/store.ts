import { configureStore } from "@reduxjs/toolkit";

import { authMiddleware } from "@/app/store/authMiddleware.ts";
import LoginReducer from "@/entities/auth/model/loginSlice";

export const store = configureStore({
  reducer: {
    auth: LoginReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(authMiddleware),
});

export type AppDispatch = typeof store.dispatch;
