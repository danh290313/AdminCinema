import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { login as loginService } from "@/services/authencation";
// export const loginUser = createAsyncThunk(
//   "auth/loginUser",
//   async (params, { rejectWithValue }) => {
//     try {
//       const { data } = await loginService(params);
//       if (data.status === "error" || data.status === "fail")
//         return rejectWithValue(data.msg || data.message);
//       else return data;
//     } catch (err) {
//       return rejectWithValue(err.message);
//       // if (err?.response?.data?.message) {
//       //   return rejectWithValue(err.response.data.message);
//       // } else {
//       //   return rejectWithValue(err.message);
//       // }
//     }
//   }
// );
const initialState = {
  currentUser: null,
  loading: false,
  //error: "",
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logoutUser: (state, action) => {
      state.currentUser = null;
      state.loading = false;
      state.error = "";
    },
    loginStart: (state, action) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
    },
    loginFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
const { reducer, actions } = authSlice;
export const { logoutUser, loginSuccess, loginFail, loginStart } = actions;
export default reducer;
