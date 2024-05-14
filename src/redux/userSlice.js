import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getLoggedInUser, getUserToken } from "../utils/localStorage";

const initialState = {
  loggedInUser: getLoggedInUser(),
  token:getUserToken(),
  status:"idle",
  error:null
};

export const callLoginUser = createAsyncThunk('user/login',async (loginData)=>{

  try {
    
  } catch (error) {
    throw new Error(error.response.data.message); 
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    storeLoggedInUser: (state, { payload }) => {
      state.loggedInUser = payload;
    },
    storeUserToken:(state, {payload})=>{
      state.token = payload;
    }
  },
});

export const { storeLoggedInUser, storeUserToken } = userSlice.actions;

export default userSlice.reducer;
