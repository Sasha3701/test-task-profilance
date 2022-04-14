import { createSlice } from "@reduxjs/toolkit";
import { ROLES } from "../const";

const initialState = {
  firstName: "",
  lastName: "",
  login: "",
  role: ROLES.GUEST,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {},
    logoutUser: (state, action) => {},
  },
});

export const { loginUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
