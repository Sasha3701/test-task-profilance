import { createSlice } from "@reduxjs/toolkit";
import api from "../api";
import { ROLES } from "../const";

const initialState = {
  firstName: "",
  lastName: "",
  login: "",
  role: ROLES.GUEST,
  error: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const { firstName, lastName, login, role } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
      state.login = login;
      state.role = role;
      state.error = false;
    },
    logoutUser: (state) => {
      state.firstName = "";
      state.lastName = "";
      state.login = "";
      state.role = ROLES.GUEST;
    },
    rejected: (state) => {
      state.error = true;
    },
  },
});

export const { loginUser, logoutUser, rejected } = authSlice.actions;

export const loginFunc = (credentions, hide) => async (dispatch) => {
  try {
    const user = await api.login(credentions);
    dispatch(loginUser(user));
    hide()
  } catch (e) {
    dispatch(rejected());
  }
};

export default authSlice.reducer;
