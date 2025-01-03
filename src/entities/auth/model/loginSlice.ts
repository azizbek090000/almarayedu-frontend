import { createSlice } from "@reduxjs/toolkit";

import { getSession, setSession } from "@/shared/lib/helpers";
import { TSession } from "@/shared/lib/types";

const initialState: TSession = getSession<TSession>() || {
  accessToken: "",
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action): void => {
      state.accessToken = action.payload.accessToken;
      state.isAuthenticated = true;

      setSession({ ...action.payload, isAuthenticated: true });
    },
    logout: state => {
      state.accessToken = "";
      state.isAuthenticated = false;

      setSession(null);
    },
  },
});

export const { setLogin, logout } = authSlice.actions;
export default authSlice.reducer;
